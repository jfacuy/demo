
document.querySelectorAll("div, p").forEach(elem =>{

	elem.addEventListener("dblclick", evt =>{
		elem.style ["background-color"] = "yellow";
		evt.stopImmediatePropagation();
	})
});