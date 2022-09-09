import reserve from "./addReservation";
import grabber from "./grabber";
const form = document.forms["reservationForm"];

const fetchReservations = async (url, id) => {
    grabber("resButton").click();
    
  grabber("reserve").addEventListener("click", (e) => {
   e.preventDefault();
    if (form.username.value === "") {
      alert("Please add text");
    } else {
      const data = {
        item_id: id,
        username: form.username.value,
        date_start: form.reservationSDate.value,
        date_end: form.reservationSDate.value,
      };
        reserve(url, data);
        fetchReservations(url, id);
    }
  });
    const apiArr = [url, id];
    let apiUrl = apiArr.join("?item_id=");
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const resCount = [data.length, "Reservations"];
    grabber("reservationModalLongTitle").innerText = resCount.join(" ");
    grabber("list-contents").innerHTML = "";
    const container = document.createElement("ul");
    container.classList = "border border-dark p-0 m-0";
    data.forEach((item) => {
        const resArr = [item.date_start, "to", item.date_end, "by", item.username];
      const element = document.createElement("li");
      element.classList = "d-flex justify-content-around";

      const resHolder = document.createElement("p");
      resHolder.innerText = resArr.join(" ");

      

      element.appendChild(resHolder);
      container.appendChild(element);
    });
    grabber("list-contents").appendChild(container);
};

export default fetchReservations;
