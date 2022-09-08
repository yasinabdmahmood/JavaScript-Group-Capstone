const displayReservation = (e) => {
  const { id } = e.target.parentNode.querySelector('.comment-button');

  console.log(id);
};

export default displayReservation;