const arr = require('./arrayUtils')
const str = require('./stringUtils')


// Testing Array Util file
try{
    console.log(arr.head("jose"))
}catch(err){
    console.log(err)
}

try{
    console.log(arr.head([]))
}catch(err){
    console.log(err)
}

try{
    console.log(arr.head([1, 2, 3, 4, 5]))
}catch(err){
    console.log(err)
}

try{
    console.log(arr.last([1, 2, 3]))
}catch(err){
    console.log(err)
}

try{
    console.log(arr.remove([1, 2, 3], 5))
}catch(err){
    console.log(err)
}

try{
    console.log(arr.remove([1, 2, 3], 1))
}catch(err){
    console.log(err)
}

try{
    console.log(arr.countElements([13, '13', 13, 'hello', true, true]))
}catch(err){
    console.log(err)
}

try{
    console.log(arr.isEqual([], []))
}
catch(err){
    console.log(err)
}

try{
    console.log(arr.isEqual([1, 2, 3], [1, 2, 3]))
}
catch(err){
    console.log(err)
}

try{
    console.log(arr.isEqual([1, 1, 3], [1, 2, 3]))
}
catch(err){
    console.log(err)
}

try{
    console.log(arr.range(3))
}
catch(err){
    console.log(err)
}
try{
    console.log(arr.range(3, "hi"))

}
catch(err){
    console.log(err)
}

try{
    console.log(arr.range())
}
catch(err){
    console.log(err)
}

// Testing String Util file

try{
    console.log(str.capitalize("jose"))
}catch(err){
    console.log(err)
}

try{
    console.log(str.capitalize("FOOBAR"))
}catch(err){
    console.log(err)
}

try{
    console.log(str.capitalize(""))
}catch(err){
    console.log(err)
}

try{
    console.log(str.repeat("abc", 1))
}catch(err){
    console.log(err)
}

try{
    console.log(str.repeat("abc", 0))
}catch(err){
    console.log(err)
}

try{
    console.log(str.repeat("", 1))
}catch(err){
    console.log(err)
}

try{
    console.log(str.countChart("JO seee helloooo"))
}
catch(err){
    console.log(err)
}

try{
    console.log(str.countChart(""))
}
catch(err){
    console.log(err)
}
