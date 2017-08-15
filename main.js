var planets = [{
  name: 'mercury',
  url: 'https://www.nasa.gov/sites/default/files/mercury_1.jpg'
}, {
  name: 'venus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg'
}, {
  name: 'earth',
  url: 'https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg'
}, {
  name: 'mars',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg'
}, {
  name: 'jupiter',
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg"
}, {
  name: 'saturn',
  url: 'http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg'
}, {
  name: 'uranus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg'
}, {
  name: 'neptune',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/260px-Neptune_Full.jpg'
}];

var planetHolderDiv = document.getElementById("planetHolder");
var getPlanetsButton = document.getElementById("showButton");
var inputField = document.getElementById("searchText");
var clearButton = document.getElementById("clearButton");

// Accepts an argument
function domString(planetz) {
	var planetString = "";
	for(var i=0; i < planetz.length; i++) {
		var newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`;
		newPlanet += `<div class="planetName hidden">${planetz[i].name}</div>`;
		newPlanet += `<img class="planetImage" src="${planetz[i].url}">`;
		newPlanet += `</div>`;
		planetString += newPlanet;
	}
	writeToDom(planetString);
	// console.log("planetString", planetString);	
}
function writeToDom(strang){
	planetHolderDiv.innerHTML = strang;
}

getPlanetsButton.addEventListener('mouseenter', function(){
	//originally you want to pass it the whole array
	domString(planets);
});
// console log out the event, and then dig into the element

function showMe(event){
	event.target.previousElementSibling.classList.remove('hidden');
}

document.body.addEventListener('click', function(e){
	// have the base available
		// console.log("click Event", e);
	//and then start digging
		// console.log("click Event", e.target.parentNode.parentNode);
	if(e.target.className === "planetImage") {
		showMe(e);
	}

})
//once you hit enter, THEN it grabs the input value
inputField.addEventListener('keypress', function(event){
	if(event.key === 'Enter') {
		var txt = inputField.value;
		//by default, filter loops through the array
			//thing = the current planet that I'm on, does it fit?
		var results = planets.filter(function(thing) {
			//if the indexOf actually has something, than it doesn't equal -1 which means return that
			return thing.name.indexOf(txt)>-1;
		})
		// pass in the shortened array to print
		domString(results);
	}
})
//clear button
clearButton.addEventListener('click', function(eVent){
	
})



