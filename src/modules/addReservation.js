import fetchReservations from "./fetchReservation";

const reserve = async (url, data) => {
  const post = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
    await fetch(url, post);
     fetchReservations(url, data.item_id);
  console.log(url);
};

export default reserve;
