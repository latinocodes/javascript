const connection = require("./mongoConnection");
const animals = require('./data/animals');

const main = async () => {
    /*  Start Working program */

    /* Create Animals */
    try{
        console.log('\nCreating Mortimer: ');
        const mortimer = await animals.create("Mortimer", "Giraffe");
        console.log(mortimer.name);
    }catch(err){
        console.log(err)
    }

    try{
        console.log('\nCreating Lucy: ');
        const Lucy = await animals.create("Lucy", "Dog");
        console.log(Lucy.name);
    }catch(err){
        console.log(err)
    }

    try{
        console.log('\nCreating Sasha: ');
        const Sasha = await animals.create("Sasha", "Dog");
        console.log(Sasha.name);
    }catch(err){
        console.log(err)
    }

    /* Get All Animals */
    try{
        console.log("\nGetting all Animals: ");
        const allMyAnimals = await animals.getAll();
        console.log(allMyAnimals);
    } catch(err){ console.log(err) }

    /* Creating Duke */
    try{
        console.log('\nCreating Duke: ');
        const Duke = await animals.create('Duke', 'Walrus')
        console.log(Duke);
    } catch(err){ console.log(err)}

    /* Get by id */
    try{
        console.log('\nGetting Animal by ID: ');
        const blubBlub = await animals.get("5c82bf9cf64e0317d3fb6543");
        console.log(blubBlub);
    }
    catch(err) {console.log(err)}
    
    try{
        console.log('\nMatch Test: ')
        const noMatch = await animals.get("BADID");
        console.log(noMatch);
    } catch(err){console.log(err)}

    try{
        console.log('\nChanging Name of Sasha: ')
        const animal = await animals.get('5c82bf9cf64e0317d3fb6543')
        const Sashita = await animals.rename(animal._id, "Sashita");
        console.log(Sashita);

    } catch(err){console.log(err)}

    try{
        console.log('\nRemoving Mortimer: ')
        const animal = await animals.remove('5c8573e5b471060a081b29aa');
        console.log(animal);

    } catch(err){console.log(err)}

    const db = await connection();
    await db.serverConfig.close();
}

main().catch(error => {
    console.log(error)
});

