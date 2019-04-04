const mongoCollections = require("../config/mongoCollections");
const ObjectID = require('mongodb').ObjectID;
const posts = mongoCollections.posts;

exports.addPost = async (title, author, content) => {
    if(title === undefined || author === undefined || typeof title !== "string" || typeof author !== "string" || typeof content !== 'string' || content === undefined){
        throw 'invalid title and/or author'
    }

    try{
        let post = {title: title, author: ObjectID(author), content: content};
        const postsCollection = await posts();
        const insertedInfo = await postsCollection.insertOne(post);
        if (insertedInfo.insertedCount === 0) throw "Could not add post";
        const id = insertedInfo.insertedId;
        const newPost = await this.getPostById(id);
        return newPost;
    }
    catch(err){ throw err; }
};

exports.getAllPosts = async () => {
    try{
        const postsCollection = await posts();
        return await postsCollection.aggregate([{
            $lookup: {
                from: "animals",
                localField: "author",
                foreignField: "_id",
                as: "author", 
            }
        }, {$project: {_id: 1, title: 1, content: 1, author: {_id: 1, name: 1}}}]).toArray();
    }
    catch(err) { throw err; }
}

exports.getPostById = async (id) => {
    if(!id){ throw 'id must be provided'}

    try{
        const postsCollection = await posts();
        const post = await postsCollection.aggregate([ 
            {$match: {_id: ObjectID(id)}},
            {$lookup: {
                from: "animals",
                localField: "author",
                foreignField: "_id",
                as: "author"
            } 
        }, {$project: {_id: 1, title: 1, content: 1, author: {_id: 1, name: 1}}}]).toArray();
        return post;
    }
    catch(err) { throw err; }
}

exports.deletePost = async (id) => {
    try{
        if(!id){ throw 'id must be provided'}
        const postsCollection = await posts();
        const itemInfo = await postsCollection.removeOne({_id: ObjectID(id)});
        if(itemInfo.deleteCount === 0) { throw `item was not deleted.`}
    }
    catch(err){ throw err; }
}

exports.updatePost = async (id, updatedPost) => {
    try{
        if(!id){ throw 'id must be provided'}
        if(!updatedPost) { throw 'data must be provide to be updated'; }

        const postsCollection = await posts();
        const data = {};

        if(updatedPost.title){
            data.title = updatedPost.title;
        }
        if(updatedPost.content){
            data.content = updatedPost.content;
        }
        await postsCollection.updateOne({_id: ObjectID(id)}, {$set: data})
        return await this.getPostById(id)
    }
    catch(err){ throw err; }

}