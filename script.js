
  var index = 0;
document.getElementById('btnsub').addEventListener('click', function(e){
    e.preventDefault();
	e.stopPropagation();
	let x = document.querySelector(".add").value;
	let li =`<ul id="ligne${index}"><li class="col-1 "><button type="button" onclick="barre(textLigne${index})" >Complete</button></li>
		<li class="col-1 "><button type="button" onclick="remove(ligne${index})">Delete</button></li> 
		<li  class="col-4 "id="textLigne${index}"> ${x}</li></ul>`;
		demoList.insertAdjacentHTML("beforeend", li);
		document.querySelector(".add").value = "";
		index++;
});
  
function remove(elementToDelete) {
	elementToDelete.parentNode.removeChild(elementToDelete); 
} 
  
function barre(e) {
	e.style.textDecoration = "line-through";
}