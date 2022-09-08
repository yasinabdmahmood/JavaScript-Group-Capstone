import { idList } from './db.js';

const getMealInfo = async (id) => {
  const response = await fetch(idList + id);
  const { meals } = await response.json();
  return meals[0];
};

export default getMealInfo;