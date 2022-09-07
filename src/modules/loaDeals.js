import  getMealInfo  from "./getMealInfo";
import heart from "../asset/images/heart-regular.svg";
const loadMeals=(arr)=>{
    
    arr.forEach(el => {
        let myPromise = new Promise(function(myResolve) {
            myResolve(getMealInfo(el)); 
           });
           myPromise.then(function(mealInfo){
            let card=`<div class="card">
             <img src=${mealInfo.strMealThumb} alt="img">
             <div class="name-like">
                
                <span>${mealInfo.strMeal}</span>
                
              <div class='like'>
            
            <img src=${heart} alt=""> 
            <p>5 Likes</p>
            </div> 
    
            </div>
            <button id=${mealInfo.idMeal} class="comment-button">comment</button>
            <button class="reservation-button">Reservation</button>
        </div>`;
        
        document.querySelector('.container').innerHTML+=card;
        
        
           })
        
    });
}

export default loadMeals;