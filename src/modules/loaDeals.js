import getMealInfo from './getMealInfo.js';
import heart from '../asset/images/heart-regular.svg';
import addLike from './addLike.js';

const loadMeals = (arr) => {
     const myPromise = new Promise((myResolve) => {
      myResolve(getMealInfo());
    });
    myPromise.then((result) => {
      result.mealInfo.sort((a,b) => parseInt(a.idMeal)-parseInt(b.idMeal));
      result.likes.sort((a,b) => parseInt(a.item_id)-parseInt(b.item_id));
      console.log(result.mealInfo);
      console.log(result.likes);
      let cards=``;
      
      result.mealInfo.forEach((el,index)=>{
        const card = `<div class="card">
        <img class="meal-image" src=${el.strMealThumb} alt="img">
        <div class="name-like">
           
       
           <span>${el.strMeal}</span>
           
         <div class='like'>
       
       <img src=${heart} class="heart" alt=""> 
       <p>${result.likes[index].likes}</p>
       <p>Likes</p>
       </div> 

       </div>
       <button id=${el.idMeal} class="comment-button">comment</button>
       <button class="reservation-button">Reservation</button>
   </div>`;
   cards+=card;
      })
      
        
        
      document.querySelector('.container').innerHTML = cards;
      const element=Array.from(document.querySelectorAll('.heart'))
      element.forEach(el=>{
        el.addEventListener("click",(e)=>{
          addLike(e.target.parentNode.parentNode.parentNode.querySelector(".comment-button").getAttribute('id')); 
          let numOfLikes= e.target.parentNode.querySelector("p").innerHTML;
          const  parsevValue=parseInt(numOfLikes);
          e.target.parentNode.querySelector("p").innerHTML=`${parsevValue+1}`;

        } );
      });
      

    });
  ;
  
};

export default loadMeals;