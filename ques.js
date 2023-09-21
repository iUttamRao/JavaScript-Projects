const arr =[1,2,3,[4,5,[6],7],"hello","world"];
// const newArr = arr.flat(1);
// const newArr2 =newArr.flat(1);
// console.log(newArr2);
let arr2 = [];
    function flat(arr) {
         arr.forEach(element => {
              if (typeof (element) === 'object') {
                   flat(element);
              } else {
                   arr2.push(element);
              }
         });
    }
    
    flat(arr);
    
console.log(arr2);
// for(let i=0;i<arr.length;i++){

// }
