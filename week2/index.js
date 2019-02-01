const val = require('./arrayUtils')

try{
    console.log(val.head("jose"))
}catch(err){
    console.log(err)
}

try{
    console.log(val.head([]))
}catch(err){
    console.log(err)
}



try{
    console.log(val.head([1, 2, 3, 4, 5]))
}catch(err){
    console.log(err)
}


try{
    console.log(val.last([1, 2, 3]))
}catch(err){
    console.log(err)
}


try{
    console.log(val.remove([1, 2, 3], 5))
}catch(err){
    console.log(err)
}

try{
    console.log(val.remove([1, 2, 3], 1))
}catch(err){
    console.log(err)
}


try{
    console.log(val.countElements([13, '13', 13, 'hello', true, true]))
}catch(err){
    console.log(err)
}


