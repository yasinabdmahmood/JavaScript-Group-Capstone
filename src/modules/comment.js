const mainDiv = document.createElement('div');
mainDiv.className = "comment-popup";

const headerDiv = document.createElement("div");
headerDiv.className = "header-div";

const headerImage = document.createElement('img');
headerImage.className = "header-image";
const closeBtn = document.createElement('span');
closeBtn.id = "close-btn";
closeBtn.textContent = "&times";
const title = document.createElement('p');
title.id = "title";
//append header div items
headerDiv.append(headerImage, closeBtn)
//
const aboutDiv = document.createElement("div");
//comments list

const commentDiv = document.createElement("div");
const commentTitle = document.createElement('h2');
//fetch comments and itterate throght them and display
const commentParagraph = document.createElement('p');
//append 
commentDiv.append(commentTitle, commentParagraph);
//comment 
const addCommentDiv = document.createElement("div");
const addCommentTitle = document.createElement('h2');
addCommentTitle.textContent = "Add a comment";
//form
const commentForm = document.createElement("form");
commentForm.id = "form";
const textInput = document.createElement('input');
textInput.type = "text";
textInput.id = "name-input";
textInput.placeholder = "Your name";
const textArea = document.createElement('textarea');
textArea.placeholder = "Your insights";
const commentBn = document.createElement('button');
commentBn.id = "add-comment-btn";
commentBn.type = "button";
commentBn.textContent = "Comment";
//add everything to form
commentForm.append(textInput, textArea, commentBn)
//append form to formDiv
addCommentDiv.append(addCommentTitle, commentForm);

mainDiv.append(headerDiv, title, aboutDiv, commentDiv, addCommentDiv);