let form = document.querySelector("form");
let name = document.getElementById("name");
let post = document.getElementById("post");
form.addEventListener("submit",function(e){
	e.preventDefault();
	readpost();
});
let data = {};
function readpost(){
	data['text']=name.value;
	createpost();
}
function createpost(){
	let date = new Date();
	post.innerHTML =`<h3>Your post here</h3>
	<div class="rightin">
	<div class="col-lg-3">
	<img src="image/logo.png"></div>
	<p class="col-lg-6">${data.text}</p>
	<span class="option">
		<iconify-icon onclick="like(this)" class="like" icon="subway:like"></iconify-icon>
		<iconify-icon onclick="edit(this)" icon="material-symbols:edit-square-outline-rounded"></iconify-icon>
		<iconify-icon onclick="dlt(this)" icon="mdi:delete"></iconify-icon>
	</span>
	<div class="time">
			<span>${date.toLocaleDateString()}</span>,<span>${date.toLocaleTimeString()}</span>
		</div>
	</div>`
	name.value = " ";
}
function edit(e){
	name.value=e.parentElement.previousElementSibling.innerHTML;
	e.parentElement.parentElement.remove();
	e.parentElement.parentElement.previousElementSibling.remove();
}
function dlt(e){
	e.parentElement.parentElement.remove();
}
function like(e){
	let like =document.querySelector(".like");
	like.style.color="#3EC7D0";
}
function time(e){
	let date = new Date();
	let tim = date.toLocaleString();
	document.write(tim);
}