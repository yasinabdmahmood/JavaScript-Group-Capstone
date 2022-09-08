import './SCSS/style.scss';
import loadMeals from './modules/loaDeals.js';
import { idList } from './modules/db.js';
import { commentPopup } from "./modules/commentPopupUI.js";

loadMeals(idList);

const main = document.querySelector('.container');
console.log(main.children);

const allCommentBtns = document.querySelectorAll('.comment-button');
console.log(allCommentBtns);
allCommentBtns.forEach((eachCommentBtn) => {
    eachCommentBtn.addEventListener('click', () => {
        console.log(eachCommentBtn.id)
        commentPopup(eachCommentBtn.id);
    });
});