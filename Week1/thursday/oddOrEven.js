function oddOrEven(array) {
    //enter code here
   if(array.length ==0){
     return "even"
   }else{
     let sum = array.reduce((prevVal,currentVal)=>{return prevVal +  currentVal});
     sum = sum < 0 ? sum * -1 : sum
     if(sum%2 == 0){
       return "even"
     }else{
       return "odd"
     }  
   }
 }