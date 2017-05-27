(function (){
	'use strict';

	const FS = require("fs");
	const DATA = JSON.parse(FS.readFileSync(__dirname + "/data/data.json"));

	window.onload = function (){
		var word = getDataJson(parseInt(window.location.search.substring(1).split("=")[1]));

		// change page head title
		document.title = word.topic;
		// change page title
		document.querySelector("h1").innerHTML = word.topic;

		if(word.type == "Cultural"){
			showCuturalDetail(word);
		}else{
			showSlangDetail(word);
		}
	};

	// pre: should give an integer of id of the desired data
	// pre: will return a json object of that id
	function getDataJson(id){
		for(var i = 0; i < DATA.length; i++){
			if(DATA[i].id == id){
				return DATA[i];
			}
		}
	}

	// pre: should pass in a json object that the type is Slangs to word
	// post: will show the information the contains in the Slangs type data
	function showSlangDetail(word){
		cleanDetail();

		// misunderstood part
		var misH2 = document.createElement("h2");
		var misP = document.createElement("p");
		misH2.innerHTML = "You Might be Thinking......";
		misP.classList.add("chinese");
		misP.innerHTML = word.misunderstood;
		document.querySelector("#misunderstood").appendChild(misH2);
		document.querySelector("#misunderstood").appendChild(misP);

		// usage part
			// example
		var exampleDiv = document.createElement("div");
		var exampleH2 = document.createElement("h2");
		var exampleP = document.createElement("p");
		exampleH2.innerHTML = "Example Situation";
		exampleP.innerHTML = word.example;
		exampleDiv.appendChild(exampleH2);
		exampleDiv.appendChild(exampleP);
		document.querySelector("#usage").appendChild(exampleDiv);
			// explanation
		var explainDiv = document.createElement("div");
		var explainH2 = document.createElement("h2");
		var explainP = document.createElement("P");
		explainH2.innerHTML = "Explanation";
		explainP.innerHTML = word.explain;
		explainDiv.appendChild(explainH2);
		explainDiv.appendChild(explainP);
		document.querySelector("#usage").appendChild(explainDiv);
	}


	// pre: should pass in a json object that the type is Cutural to word
	// post: will show the information the contains in the Cutural type data
	function showCuturalDetail(word){
		cleanDetail();

		// misunderstood part
		var misH2 = document.createElement("h2");
		var misP = document.createElement("p");
		misH2.innerHTML = "You Might be Thinking......";
		misP.classList.add("chinese");
		misP.innerHTML = word.misunderstood;
		document.querySelector("#misunderstood").appendChild(misH2);
		document.querySelector("#misunderstood").appendChild(misP);

		// usage part
			// explanation
		var explainDiv = document.createElement("div");
		var explainH2 = document.createElement("h2");
		var explainP = document.createElement("P");
		explainH2.innerHTML = "Explanation";
		explainP.innerHTML = word.explain;
		explainDiv.appendChild(explainH2);
		explainDiv.appendChild(explainP);
		document.querySelector("#usage").appendChild(explainDiv);
	}

	// pre: when need to load new explanation
	// post: will clean up the explanation
	function cleanDetail(){
		document.querySelector("#misunderstood").innerHTML = "";
		document.querySelector("#usage").innerHTML = "";
	}
	
})();