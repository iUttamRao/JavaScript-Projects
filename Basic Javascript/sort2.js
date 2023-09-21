const arr = [342,567,0.11,-1.7 ,'a',[],{}];

let newArr =[];

for(let i=0;i<arr.length;i++){
    if(typeof arr[i] ==='number'){
        let j = newArr.length -1;
        //  console.log(j)
        while(j>= 0 && newArr[j] >arr[i]){
            // console.log(newArr[j] + " " + arr[i])
            newArr[j+1]=newArr[j];
            // console.log(newArr[j+1] + " " + newArr[j])
            j--;
            // console.log(j);
        }
        newArr[j+1]=arr[i];
    }
}
console.log(newArr);