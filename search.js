(function (){
	'use strict';

	const FS = require("fs");
	const DATA = JSON.parse(FS.readFileSync(__dirname + "/data/data.json"));

	window.onload = function (){
		console.log("apple");
		showResults(window.location.search.substring(1).split("=")[1]);
	};

	// pre: should give a string to the key
	// post: the function should make a list on the page for topic that partitally or fully meet the key
	function showResults(key){

	}

	// pre: should give a single json object of the word
	// post: will return a li containing a single line of search result
	function createDetailLink(json){
		var li = document.createElement("li");
		li.innerHTML = "<a href=\"detail.html?id=" + json.id + "\">" + json.topic + "</a> - " + json.type;

		return li;
	}

})();