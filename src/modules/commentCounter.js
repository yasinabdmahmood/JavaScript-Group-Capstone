const commentCounter = async (itemId) => {
      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/comments?item_id=${itemId}`;
         const res = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    
    return data.length;
}

export default commentCounter;