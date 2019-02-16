const arr = require('./arrayUtils')
const str = require('./stringUtils')
const obj = require('./objUtils')


try{
    console.log(arr.last([]))
}
catch(err){
    console.log(err)
}
try{
    console.log(arr.head([]))
}catch(err){
    console.log(err)
}

try{
    console.log(arr.remove([1, 3, 4], -1))
}
catch(err){
    console.log(err)
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
