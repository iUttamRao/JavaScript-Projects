const obj1 = {
    id: 777,
    age:25,
}

const obj2 ={
    id: 777,
    age:26,
}

for(const[key,value] of Object.entries(obj1)){
    var str = (`${key}:${value}`);
    // console.log(str)
}
for(const[key,value] of Object.entries(obj2)){
    var str2 = (`${key}:${value}`);
}

if(str===str2){
    console.log(true);
}
else{
    console.log(false);
}