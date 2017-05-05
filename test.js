"use strict";

(function (){
	const FS = require('fs');
	const TEST = JSON.parse(FS.readFileSync(__dirname + "/test.json"));

	window.onload = function (){
		document.getElementById("test_div").innerHTML = TEST.testing;
	}

})();