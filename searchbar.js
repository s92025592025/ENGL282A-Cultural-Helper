(function (){
	"use scrict";
	
	document.querySelector("#search-btn").onclick = function(){
		window.location = "search.html?search=" + document.querySelector("#search-bar").value;
	};
})();