const dic = require("./dictionary")

try{
    console.log(dic.lookupDefinition("programming"))
}catch(err){
    console.log(err)
}

try{
    console.log(dic.lookupDefinition("charisma"))
}catch(err){
    console.log(err)
}

try{
    console.log(dic.lookupDefinition(1))
}catch(err){
    console.log(err)
}

try{
    console.log(dic.getWord("programming"))
}catch(err){
    console.log(err)
}

try{
    console.log(dic.getWord("to make an official decision about who is right in (a dispute) : to settle judicially"))
}catch(err){
    console.log(err)
}

try{
    console.log(dic.getWord("A sudden or irregular invasion or attack for war or spoils : raid"))
}catch(err){
    console.log(err)
}