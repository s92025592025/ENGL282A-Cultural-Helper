(function (){
	"use scrict";

	window.onload = function (){
		document.querySelector("#search-btn").onclick = function(){
			window.location = "search.html?search=" + document.querySelector("#search-bar").value;
		};
	};
})();