let t1=[3, 1, 7, 9];
let t2=[2, 4, 1, 9, 3];


let sum=0;

for (let i = 0; i < t1.length; i++) {
    let array=false;
   for (let j= 0; j < t2.length; j++) {
     if (t1[i]==t2[j]) {
      array=true;
       
     }
   
   }
   if  (array==false){
    sum+=t1[i];
     }
     
}
for (i = 0; i< t2.length; i++) {
    let array=false;
    for (j= 0; j < t1.length; j++) {
      if (t2[i]==t1[j]) {
        array=true;
        
      }
      
     
    }
    if (array==false) {
        
        sum+=t2[i];
         } 
 }

  
console.log(sum);
