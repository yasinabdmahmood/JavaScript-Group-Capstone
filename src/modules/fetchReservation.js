import grabber from "./grabber";

const fetchReservations = async (url, id) => {
    const apiArr = [url, id];
    let apiUrl = apiArr.join("?item_id=");
    const response = await fetch(apiUrl);
    const data = await response.json();
    const { result } = data;
    console.log(data);
    grabber("list-contents").innerHTML = "";
    // grabber("list-contents").classList = "border border-dark p-0";
    const container = document.createElement("ul");
    container.classList = "border border-dark p-0 m-0";
    data.forEach((item) => {
        const element = document.createElement("li");
        element.classList = "d-flex justify-content-around";

        const userNameHolder = document.createElement("p");
        userNameHolder.innerText = item.username;

        const startDateHolder = document.createElement("p");
        startDateHolder.innerText = item.date_start;

        const endDateHolder = document.createElement("p");
        endDateHolder.innerText = item.date_end;

        element.appendChild(userNameHolder);
        element.appendChild(startDateHolder);
        element.appendChild(endDateHolder);
        container.appendChild(element);
    });
    grabber("list-contents").appendChild(container);
};

export default fetchReservations;