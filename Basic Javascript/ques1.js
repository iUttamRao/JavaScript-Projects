var string="i like hiking mountains, i like playing sports, i like reading books";
var newString="";
for(let i=0;i<=string.length;i++){
    if(string[i]==="a" || string[i]==="e" || string[i]==="i" || string[i]==="o" || string[i]==="u"){
        newString=newString+"*";
    }
    else{
        newString=newString+string[i];
    }
}
console.log(newString);