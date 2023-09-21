let n=5;
let string ="";

for(let i=n;i>=1;i--){
    for(let j=0;j<i;j++){
        string+="* ";
    }
    string+="\n";
}
console.log(string);