const counter=()=>{
   const itemNumber= document.querySelectorAll('.card').length;
   document.querySelector('.counter h1').innerHTML=`Total number of items : ${itemNumber} `
  
}

export default counter;