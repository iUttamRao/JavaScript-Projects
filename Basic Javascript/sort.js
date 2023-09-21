const arr = [342,567,0.11,-1.7 ,'a',[],{}];

const newArr =arr.filter(
    element => typeof element === 'number'
  );
 console.log(newArr);

const n = newArr.length;

function Sort(arr, n)
{
    let i, j, temp; 
    let swapped;
    for (i = 0; i < n - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped == false)
        break;
    }
}

Sort(newArr,n);

console.log(newArr)

