fetch("https://fakestoreapi.com/products/3")
  .then((res) => res.json())
  .then((json) => console.log(json));

var selectedItemsElement = document.getElementById("user--selected--items");

function action(that , e){
	
	if(!(that.getAttribute("data-action") != "add")){
		addItem(that);
		that.setAttribute("data-action","remove");
		that.innerText="remove this from cart";
	}
	else if(!(that.getAttribute("data-action") != "remove")){
		removeItem(that);
		that.setAttribute("data-action","add");
		that.innerText="add this to cart";
	}

}

function addItem(btElement){
	
	var selectedElement = document.getElementsByClassName("item")[(btElement.value.charAt(( btElement.value.length )- 1) -1)];

	var selectedItem = selectedElement.getElementsByTagName("h1")[0].innerText;
	var selectedItemPrice = selectedElement.getElementsByTagName("p")[0].innerText;

	var tempElement = document.createElement("li");
	tempElement.innerText = "Product : "+selectedItem+"{Price : "+selectedItemPrice+"}";
	
	selectedItemsElement.appendChild(tempElement);

}

function removeItem(btElement){


	var selectedElement = document.getElementsByClassName("item")[(btElement.value.charAt(( btElement.value.length )- 1) -1)];

	var selectedItem = selectedElement.getElementsByTagName("h1")[0].innerText;
	var selectedItemPrice = selectedElement.getElementsByTagName("p")[0].innerText;

	var tempElement = document.createElement("li");
	tempElement.innerText = "Product : "+selectedItem+"{Price : "+selectedItemPrice+"}";

	var selected = selectedItemsElement.childNodes;

	for(var i=0 ; i<selected.length  ; i++){
		if(tempElement.innerText == selected[i].innerText){
			selectedItemsElement.removeChild(selectedItemsElement.childNodes[i]);
		}
	}
}
