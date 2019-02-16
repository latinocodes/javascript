const arr = require('./arrayUtils')
const str = require('./stringUtils')
const obj = require('./objUtils')


// Testing Array Util module
console.log("\nTesting Array Util module: ")

try{
    // Should Fail
    console.log(arr.head("jose"))
    console.log('head passed successfully');
}catch(err){
    console.error("head test failed: "+ err);
}

try{
    // should return 1
    console.log(arr.head([1, 2, 3]))
    console.log('head passed successfully');
}catch(err){
    console.error("head test failed: "+ err);
}

try{
    // should failed
    console.log(arr.remove([1, 2, 3], 5));
    console.log('remove passed successfully');
}catch(err){
    console.error("remove test failed: "+ err);
}

try{
    // should pass, return [1, 3]
    console.log(arr.remove([1, 2, 3], 1))
    console.log('remove passed successfully, expected valud [1, 3]');
}catch(err){
    console.error("remove test failed: "+ err);
}


try{
    // should pass, returns ['hi', 'hi', 'hi']
    console.log(arr.range(3, "hi"))
    console.log('range passed successfully');
}catch(err){
    console.error("range test failed: "+ err);
}

try{
    // should failed
    console.log(arr.range())
    console.log('range passed successfully');
}catch(err){
    console.error("range test failed: "+ err);
}

// Testing String Util file
console.log('\nTesting String Util file');
try{
    // should pass, should return Jose
    console.log(str.capitalize("jose"))
    console.log('capitalize passed successfully');
}catch(err){
    console.error("capitalize test failed: "+ err);
}

try{    
    // should failed
    console.log(str.capitalize(""))
    console.log('capitalize passed successfully');
}catch(err){
    console.error("capitalize test failed: "+ err);
}

try{
    // should pass, returns abc
    console.log(str.repeat("abc", 1))
    console.log('repeat passed successfully');
}catch(err){
    console.error("repeat test failed: "+ err);
}


// Testing ObjUtils module
console.log("\nTesting Obj Utils module")
const first = { x: 2, y: 3};

try{
    // should pass, return { x: 3, y: 4 }
    console.log(obj.mapValues(first, n => n + 1))
    console.log('mapValues passed successfully');
} catch(err){
    console.error("mapValues test failed: "+ err);
}

try{
    // should failed
    console.log(obj.mapValues({ a: 1, b: 2, c: 3 }, "Hello world"))
    console.log('mapValues passed successfully');
} catch(err){
    console.error("mapValues test failed: "+ err);
}
