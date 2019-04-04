const mongoCollections = require("../config/mongoCollections");
const ObjectID = require('mongodb').ObjectID;
const animals = mongoCollections.animals;

exports.create = async (name, animalType, likes=[])=> {

    if(name === undefined || animalType === undefined || typeof name !== "string" || typeof animalType !== "string") {
        throw 'invalid name and/or animal type'
    }
    if(!name || !animalType){
        throw 'invalid name and/or animal type'
    }

    if(typeof likes !== 'object'){
        throw 'invalid type for likes'
    }

    try{
        let animal = { name: name, animalType: animalType, likes: likes};
        const animalCollection = await animals();
        const insertedInfo = await animalCollection.insertOne(animal);
        if (insertedInfo.insertedCount === 0) throw "Could not add animal";
        const id = insertedInfo.insertedId;
        const newAnimal = await this.get(id);
        return newAnimal;

    }catch(err) {
        throw err
    };
};

exports.getAll = async () => {
    try{
        const animalCollection = await animals();
        return await animalCollection.aggregate([{
            $lookup: {
                from: "posts",
                localField: "_id",
                foreignField: "author",
                as: "posts"
            }
        }, {$project: {_id: 1, name: 1, animalType: 1, likes: 1, posts: {_id: 1, title: 1}}}]).toArray();

    }catch(err) {
        throw err
    };
};

exports.get = async (id) => {
    if(!id){ throw 'invalid id input' };
    try{
        const animalCollection = await animals();
        const newAnimal = await animalCollection.aggregate([ 
            {$match: {_id: ObjectID(id)}},
            {$lookup: {
                from: "posts",
                localField: "_id",
                foreignField: "author",
                as: "posts"
            }
        }, {$project: {_id: 1, name: 1, animalType: 1, likes: 1, posts: {_id: 1, title: 1}}}]).toArray();
        return newAnimal;
    }
    catch(err){
        throw err;
    }
};

exports.remove = async (id) => {
    if(!id) {  throw 'invalid id input'}

    try {
        const animalCollection = await animals();
        const newID = ObjectID(id)
        const removedAnimal = await animalCollection.removeOne({_id: newID});
        
        if (removedAnimal.deletedCount === 0) {
            throw `Could not delete the animal with id of ${id}`;
        } 
    } catch (error) {
        throw error;
    }

};

exports.update = async (id, name, animalType) => {
    if(!id) {  throw 'invalid id input'}
    if(!name || name === undefined || typeof name !== 'string') { throw 'invalid name input'}
    if(!animalType || animalType === undefined || typeof animalType !== 'string') { throw 'invalid animal type input'}

    try {
        const animalCollection = await animals();
        const updatedAnimal = {
            name: name,
            animalType: animalType
        };
        const updatedInfo = await animalCollection.updateOne({ _id: ObjectID(id) }, {$set: updatedAnimal});
        if (updatedInfo.modifiedCount === 0) {
            throw "could not update the Animal successfully";
        }
        return this.get(ObjectID(id));

    } catch (error) {
        throw error;
    }
};

exports.addLike = async (id, likeId) => {
    if(!id) {  throw 'invalid id input'}
    if(!likeId){  throw 'invalid likeId input'}

    try{
        const animalCollection = await animals();
        const updateAnimal = await animalCollection.updateOne({ _id: ObjectID(id) }, {$push: {likes: likeId}})
        if(updateAnimal === 0){
            throw "could not update the Animal successfully";
        }
        return this.get(id);
    }
    catch(error){
        throw error;
    }
};

exports.removeLike = async (id, likeId) => {
    if(!id) {  throw 'invalid id input'}
    if(!likeId){  throw 'invalid likeId input'}

    try{
        const animalCollection = await animals();
        const updateAnimal = await animalCollection.updateOne({ _id: ObjectID(id) }, {$pull: {likes: likeId}})
        if(updateAnimal === 0){
            throw "could not update the Animal successfully";
        }
        return this.get(ObjectID(id));
    }
    catch(error){
        throw error;
    }
};

exports.rename = async (id, newName) => {
    if (!id) throw "You must provide an id to search for";
    if (!newName) throw "You must provide a name for your animal";
    if(typeof newName !== 'string'){throw 'invalid name input'}

    try {
        const animalCollection = await animals();
        const updatedAnimal= {
            name: newName,
        };
    
        const newID = ObjectID(id)
        const updatedInfo = await animalCollection.updateOne({ _id: newID },{$set: updatedAnimal});
        if (updatedInfo.modifiedCount === 0) {
            throw "could not update the Animal successfully";
        }
        return await this.get(ObjectID(id));
        
    } catch (error) {
        throw error;
    }

}
