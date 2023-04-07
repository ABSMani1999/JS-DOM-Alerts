var btn=document.querySelector(".btn");

	btn.addEventListener('click', function(e){
		let targetElement=e.target;
	//console.log(targetElement);
		let parentDiv=targetElement.parentNode;
	//console.log(parentDiv);
		parentDiv.classList.remove("row");
		});