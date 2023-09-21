const obj ={
    a:'string',
    b:43,
};

for(const[key,value] of Object.entries(obj)){
    console.log(`${key} : ${value}`);
}