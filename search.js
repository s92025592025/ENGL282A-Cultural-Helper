(function (){
	'use strict';

	const FS = require("fs");
	const DATA = JSON.parse(FS.readFileSync(__dirname + "/data/data.json"));

	window.onload = function (){
		console.log("apple");
		showResults(window.location.search.substring(1).split("=")[1]);
	};

	function showResults(key){
		console.log(DATA.length);
		for(var i = 0; i < DATA.length; i++){
			console.log(DATA[i].topic);
		}
	}

})();