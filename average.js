// odd number
function oddAvg(num){
    console.log(num);
    let sum=0,count=0;  
    for(let i=0; i<num.length;i++){
        if(num[i]%2 !==0){
            sum=sum+num[i];
            count++;        
        }           
    
}
    const avg=sum/count;
    return avg;
}
const num=[4,7,13,42,57,31,2];
const avg=oddAvg(num);
console.log('Average number is :',avg)
