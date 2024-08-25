// Write your helper functions here!
// const pilot = document.getElementById("pilotName");
// const copilot = document.getElementById("copilotName");
// const fuelLevel = document.getElementById("fuelLevel");
// const cargoLevel = document.getElementById("cargoMass");
// const button = document.getElementById("formSubmit");
// const form = document.querySelector("launchForm"); 

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
                ;
    
}

function validateInput(testInput) {


    if (isNaN(Number(testInput))) {
        return "Not a Number";
    }

    else if (testInput === "") {
        return "Empty";
    }
    else return "Is a Number";


}
//  window.addEventListener("load", function() {

//     });
// let pilotInput = validateInput(document.querySelector("input[name=pilotName]"))
// let copilotInput = (validateInputdocument.querySelector("input[name=copilotName]"))
// let fuelInput = validateInput(document.querySelector("input[name=fuelLevel]"))
// let cargoInput = validateInput(document.querySelector("input[name=cargoMass]"))


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //console.log("Test")
    const pilotStat = document.getElementById("pilotStatus")
    const copilotStat = document.getElementById("copilotStatus")
    const fuelStat = document.getElementById("fuelStatus")
    const cargoStat = document.getElementById("cargoStatus")
    const launchStat = document.getElementById("launchStatus")
    pilotStat.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStat.innerHTML = `Co-pilot ${copilot} is ready for launch`;
   
    if (Number(fuelLevel) < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        fuelStat.innerHTML = 'Fuel level too low for launch';
         launchStat.innerHTML = "Shuttle Not Ready for Launch";
    launchStat.style.color = "red";
    }
    //add changes to make good again if amounts changed
    if (Number(cargoLevel) > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        cargoStat.innerHTML = 'Cargo mass too heavy for launch';
         launchStat.innerHTML = "Shuttle Not Ready for Launch";
    launchStat.style.color = "red";
    }
    if (Number(fuelLevel) >= 10000) {
        fuelStat.innerHTML = "Fuel level high enough for launch";
    }
    if (Number(cargoLevel) <= 10000) {
        cargoStat.innerHTML = "Cargo mass low enough for launch";
    }

     if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000 ){
        fuelStat.innerHTML = "Fuel level high enough for launch";
        cargoStat.innerHTML = "Cargo mass low enough for launch";
         launchStat.style.color = "green";
        launchStat.innerHTML = "Shuttle is Ready for Launch";
       
    document.getElementById("faultyItems").style.visibility = "visible";
}

}






async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    return response.json();
});
    return planetsReturned;

}

function pickPlanet(planets) {
let randomNum = Math.floor(Math.random()*planets.length);
return planets[randomNum];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;