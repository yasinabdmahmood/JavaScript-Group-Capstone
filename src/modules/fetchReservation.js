import reserve from "./addReservation";
import { apiBaseUrl } from "./db";
import grabber from "./grabber";
const form = document.forms["reservationForm"];


const fetchReservations = async (url, id) => {
    grabber("reserve").addEventListener("click", (e) => {
   
    if (form.username.value === "") {
      alert("Please add text");
    } else {
      const data = {
        item_id: id,
        username: form.username.value,
        date_start: form.reservationSDate.value,
        date_end: form.reservationEDate.value,
      };
        reserve(url, data);
       
    }
    });
    
    const response1 = await fetch(apiBaseUrl + id);
    const { meals } = await response1.json();
  const info = meals[0];
  grabber("m-image").src = info.strMealThumb;
  grabber("mealTitle").innerText = info.strMeal;
    const apiArr = [url, id];
    let apiUrl = apiArr.join("?item_id=");
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    const resCount = [data.length, "Reservations"];
    grabber("reservationModalLongTitle").innerText = resCount.join(" ");
    grabber("list-contents").innerHTML = "";
    const container = document.createElement("ul");
    container.classList = "border border-dark p-0 m-0 list ";
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
