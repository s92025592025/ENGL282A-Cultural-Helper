(function (){
	"use scrict";
	
	document.querySelector("#search-btn").onclick = function(){
		window.location = "search.html?search=" + document.querySelector("#search-bar").value;
	};

	document.querySelector("#search-bar").onkeypress = function (event){
		if(event.keycode == 13 || event.which == 13){
			window.location = "search.html?search=" + document.querySelector("#search-bar").value;
		}
	};
})();