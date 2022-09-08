import { apiBaseUrl } from './db.js';
import { idList } from './db.js';

const getMealInfo = async () => {
  const mealInfo=[];
  idList.forEach(async(ele)=>{
    const response = await fetch(apiBaseUrl + ele);
    const { meals } = await response.json();
    const info=meals[0];
    mealInfo.push(info);
  })
  
  const response=await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/likes/');
  const likes = await response.json();
  
 
  return {likes,mealInfo};
};

export default getMealInfo;