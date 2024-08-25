// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { formSubmission, validateInput } = require("./scriptHelper");
window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
    event.preventDefault(); 
      //console.log(pilot)
        //alert("button")
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");
        let messages = [];



        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty"|| validateInput(fuelLevel) === "Empty"|| validateInput(cargoLevel) === "Empty") {
            alert("All fields are required!");
            return 
        }


        //console.log(pilot)



        if (validateInput(pilot) === "Is a Number") {
            messages.push("invalid pilot input, please enter only letters")
        }
        if (validateInput(copilot) === "Is a Number") {
            messages.push("invalid copilot input, please enter only letters")
        }
        if (validateInput(fuelLevel) !== "Is a Number") {
            messages.push("invalid fuel input, please enter only numbers")
        }
        if (validateInput(cargoLevel) !== "Is a Number") {
            messages.push("invalid cargo input, please enter only numbers")
        }

        if (messages.length > 0) {
            alert(messages.join(", "))
            
        }
        else if (messages.length === 0) {
            formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        }
    
        //console.log(pilot)

    

});





    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);
    //.then(function () {
       // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let randomPlanet = pickPlanet(listedPlanets)
       addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)

})
    
 });   



   
    

 //});

// const button =  document.querySelector("formSubmit")
// window.onload = function(event){
//      {event.alert("reloaded");}
   
//  let document = this.document
    
//    console.log("loaded")
    
    

//     // let form = document.querySelector("form");

//     button.addEventListener("click", function (event) {
//         alert("etertert")
   
        


//         let pilotInput = document.querySelector("input[name=pilotName]");
//         let copilotInput = document.querySelector("input[name=copilotName]");
//         let fuelInput = document.querySelector("input[name=fuelLevel]");
//         let cargoInput = document.querySelector("input[name=cargoMass]");

//         let pilot = pilotInput.value;
//         let copilot = copilotInput.value;
//         let fuelLevel = fuelInput.value;
//         let cargoLevel = cargoInput.value;
//         let messages = [];



//         if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty") {
//             return alert("All fields are required!");
//         }






//         if (validateInput(pilot) === "Not a number") {
//             messages.push("invalid pilot input, please enter only letters")
//         }
//         if (validateInput(copilot) === "Not a number") {
//             messages.push("invalid copilot input, please enter only letters")
//         }
//         if (validateInput(fuelLevel) !== "Is a Number") {
//             messages.push("invalid fuel input, please enter only numbers")
//         }
//         if (validateInput(cargoLevel) !== "Is a Number") {
//             messages.push("invalid cargo input, please enter only numbers")
//         }

//         if (messages.length > 0) {
//             window.alert(messages.join(", "))
//             event.preventDefault()
//         }
//         else if (messages.length == 0) {
//             formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
//         }
    
    

//     let listedPlanets;
//     // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//     let listedPlanetsResponse;
//     listedPlanetsResponse.then(function (result) {
//         listedPlanets = result;
//         console.log(listedPlanets);
//     }).then(function () {
//         console.log(listedPlanets);
//         // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//     })

// });
// };
