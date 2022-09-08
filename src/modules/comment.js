
const url = 
"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/comments/";
const postComment = async (formData) => {

  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
}

const fetchComment = async () => {
  //    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/meals/${mealId}/comments/`;
   return await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export { postComment, fetchComment };