function operations(a,b,operator){
    return eval(""+a+""+operator+""+b+"");//es5
    //return eval(`""+a+""+operator+""+b+"");
}

const result= operations(4,5,'**');
console.log("Result => "+ result);