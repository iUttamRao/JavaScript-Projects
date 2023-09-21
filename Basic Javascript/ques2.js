const series = [2,3,5,7,11]

function check(){
        let isPrime=true;
        for(let i=0;i<series.length;i++){
            if(series[i]<2){
                return false;
            }
            else{
                for(let j=2;j<series[i];j++){
                    j
                }
            }
        
        }
    }
    if(isPrime(series)===true){
        console.log("Series is Prime Number")
    }
    else if(isFibo(series)===true){
        console.log("Series is Fibo")
    }
    else{
        console.log("Series is normal")
    }

}