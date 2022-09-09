import _ from "lodash";
import './SCSS/style.scss';
import Icon from './asset/images/app_screenshot.png';
import reserve from './modules/addReservation.js';
import grabber from "./modules/grabber";
import fetchReservations from "./modules/fetchReservation.js";

const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/reservations';
const apiUrl2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/reservations?item_id=item1';
const form = document.forms["reservationForm"];

console.log("pressed");
grabber('reserve').addEventListener("click", () => {
    console.log("pressed");
    if (form.username.value === "") {
      alert("Please add text");
    } else {
      const data = {
        "item_id": "item1",
        "username": form.username.value,
        "date_start": form.reservationSDate.value,
        "date_end": form.reservationSDate.value
      };
      reserve(apiUrl, data);
    }
  });

  grabber('resButton').addEventListener("click", () => {
    fetchReservations(apiUrl,"item1");
  })
  