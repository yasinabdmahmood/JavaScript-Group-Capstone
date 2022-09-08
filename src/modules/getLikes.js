const getLikes = async (idMeal) => {
    const response=await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/likes/');
    const message = await response.json();
    
    return message;
    }

    export default getLikes;