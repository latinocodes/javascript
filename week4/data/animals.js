const mongoCollections = require("../mongoCollections");
const ObjectID = require('mongodb').ObjectID;
const animals = mongoCollections.animals;

exports.create = async (name, animalType)=> {

    if(name === undefined || animalType === undefined || typeof name !== "string" || typeof animalType !== "string") {
        throw 'invalid name and/or animal type'
    }

    try{
        let animal = { name: name, animal: animalType };
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
        const newAnimal = await animalCollection.find({}).toArray();
        return newAnimal;
    }catch(err) {
        throw err
    };
};

exports.get = async (id) => {
    if(!id){ throw 'invalid id input' };
    try{
        const animalCollection = await animals();
        const newID = ObjectID(id)
        const newAnimal = await animalCollection.findOne({_id: newID });
        if (newAnimal === null) throw "No Animal with that id";
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
        return await this.get(id);
        
    } catch (error) {
        throw error;
    }

}
