let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let listItems = document.getElementsByTagName("li")



function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); 
	input.value = ""; 
	
	let deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("Delete"))
	li.appendChild(deleteBtn);
	deleteBtn.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {		
		createListElement;
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {	
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick = function(event) {
	let target = event.target;
	target.classList.toggle("done");
}

function listLength() {
	return listItems.length;
}

function deleteButton() {
	let btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	listItems[i].appendChild(btn);
	btn.onclick=removeParent;
	
}

for( i=0;i<listLength();i++){

	deleteButton();
	}

function removeParent(evt) {
	evt.target.parentNode.remove();
}

