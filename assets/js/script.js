// Global variables
const services = ["wash", "dry", "groom"];
const chosenServices = [];
const container = document.getElementById("container");
const groomingContainer = document.getElementById("grooming-container");
const groomingContainer2 = document.getElementById("grooming-container2");
const groomingText = document.getElementById("grooming-text");
const ImgUni = document.getElementById("img-uni");
finishContainer = document.getElementById("finish");
const finishBtn = document.createElement('button');
const counterDisplay = document.getElementById("counter");
const wash = document.getElementById("wash");
const dry = document.getElementById("dry");
const groom = document.getElementById("groom");
const continueToGroom = document.getElementById("continue");
const serviceContainer = document.getElementById("service-conf");
let textService = document.getElementById("service-confirmation");
const wetUni = document.createElement("img");
const dryUni = document.createElement("img");
const washBtn = document.createElement("button");
const dryBtn = document.createElement("button");
const groomBtn = document.createElement("button");

// Button click event listeners
wash.addEventListener("click", addService);
dry.addEventListener("click", addService);
groom.addEventListener("click", addService);

// A function that toggles the .hide class on hidden element
function hide(hiddenElement) {
  hiddenElement.classList.toggle("hide");
}

// a function to unhide the initial container when the dom is loaded
document.addEventListener("DOMContentLoaded", function () {
  hide(container);
});

// A function add to pick a service
function addService(e) {
  // connect the button to the array
  const serviceName = e.target.id;
  const selectedService = services.find(function (service) {
    return service.name === serviceName;
  });
  // push the chosen service to the chosen service array
  chosenServices.push(serviceName);

  // confirms the service the user has chosen
  let message = document.createElement("p");
  message.textContent = `Great we will ${serviceName} your unicorn!`;
  serviceContainer.appendChild(message);
  console.log(message);

  // disable the button once it has been chosen so it can't be chosen twice
  document.getElementById(e.target.id).setAttribute("disabled", true);
  console.log(chosenServices);

  // event listener for the continue button
  continueToGroom.addEventListener("click", function () {
    hide(container);
    groomingTime();
  });
}

// show grooming buttons if they are in the chosenService array
function groomingTime() {
  hide(groomingContainer);
  groomingText.textContent = "Fantastic lets get!";

  // looping through the chosen services
  for (let i = 0; i < chosenServices.length; i++) {
    let chosenService = chosenServices[i];
    if (chosenService === "wash") {
      washBtn.innerHTML = "Start Wash";
      washBtn.setAttribute("id", "startWash");
      document.body.appendChild(washBtn);
      let startWash = document.getElementById("startWash");
      startWash.addEventListener("click", washTime);
      console.log(services);
    } else if (chosenService === "dry") {
      dryBtn.innerHTML = "Start Dry";
      dryBtn.setAttribute("id", "startDry");
      document.body.appendChild(dryBtn);
      let startDry = document.getElementById("startDry");
      startDry.addEventListener("click", dryTime);
    } else if (chosenService === "groom") {
      groomBtn.innerHTML = "Start Groom";
      groomBtn.setAttribute("id", "startGroom");
      document.body.appendChild(groomBtn);
      let startGroom = document.getElementById("startGroom");
      startGroom.addEventListener("click", groomTime);
    }
  }

  // allers the user if they have not picked all of the options
  if (!chosenServices.includes('wash')){
    alert('Lets wash the unicorn first');
    location.reload();
  }
  if (!chosenServices.includes('dry')){
    alert("don't forget to dry your unicorn");
    location.reload();
  }
  if (!chosenServices.includes('groom')){
    alert("don't forget to groom your unicorn");
    location.reload();
  }
}
// a funcion to start timer for washing unicorn and remove the wash button
function washTime() {
  washBtn.remove();
  let indexWash = chosenServices.indexOf('wash');
  if (indexWash !== -1) {
  chosenServices.splice(indexWash, 1);
  }
  washCountdown(5);
}

// A function to add the next image and text when finished washing 
function finishWashing() {
  wetUni.src = "./assets/images/wet-unicorn.jpeg";
  let src = document.getElementById("grooming-container2");
  counterDisplay.textContent = "";
  src.appendChild(wetUni);
  groomingText.textContent =
    "Great she is all nice and clean but a little soggy!";
}

// A function to start the drying counter as long as the wash counter as been chosen first.
function dryTime() {
  if (chosenServices.includes('wash')){
    alert('Oops I think we need to wash the unicorn first')
    return
  }
  // removes dry from chosen services using the word dry
  let indexDry = chosenServices.indexOf('dry');
  if (indexDry !== -1) {
  chosenServices.splice(indexDry, 1);
  }
  // remove the dry button
  dryBtn.remove();
  dryCountdown(5);
}

// a function to add a new pic and text after drying is finished
function finishDry() {
  let src = document.getElementById("grooming-container2");
  groomingText.textContent = "Yes she is dry but still a little wind blown!";

  dryUni.src = "./assets/images/wind-blown-unicorn.png";
  dryUni.setAttribute("id", "dry-uni");
  dryUni.style.maxHeight = "40vh";

  counterDisplay.textContent = "";
  src.appendChild(dryUni);
}

// A function to start the grooming timer as long as the other buttons have already been picked
function groomTime() {
  if (chosenServices.includes('wash')){
    alert('oops I think we need to wash the unicorn first')
    return
  } else if (chosenServices.includes('dry') && !chosenServices.includes('wash')){
    alert('oops I think we need to dry the unicorn first')
    return
  }
  // remove the grooming button
  groomBtn.remove();
  groomCountdown(5);
}

// a function to update the pic and text once grooming is finished
function finishGroom() {
  let src = document.getElementById("grooming-container2");
  groomingText.textContent =
    "Marvelous we have finished! She looks much better now! Thank you so much for helping me!";
  const groomUni = document.createElement("img");
  groomUni.src = "./assets/images/clean-unicorn.jpeg";
  groomUni.setAttribute("id", "clean-uni");
  groomUni.style.maxHeight = "40vh";
  counterDisplay.textContent = "";
  src.appendChild(groomUni);
  console.log(groomUni);
  // Add the finish game button
  finishBtn.innerHTML = "Finish";
  finishBtn.setAttribute("id", "finish-btn");
  document.body.appendChild(finishBtn);
  let finishing = document.getElementById("finish-btn");
  finishing.addEventListener("click", finish);

}

// A function to finish the game and ask if they want to play again
function finish() {
  hide(finishContainer);
  finishBtn.remove();
  const yes = document.getElementById('yes');
  yes.addEventListener("click", function(){
    location.reload();
  })
  const no = document.getElementById('no');
  no.addEventListener("click", function(){
    alert('Ok hope to see you again soon!')
  })
}

// a function to count down 5 seconds of washing time
function washCountdown(seconds) {
  // hide(groomingContainer);
  // hide(timer);
  ImgUni.remove();
  let counter = seconds;
  const interval = setInterval(() => {
    counterDisplay.textContent = counter;
    console.log(counter);
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      finishWashing();
    }
  }, 1000);
}

// A function to countdown 5 seconds of drying time
function dryCountdown(seconds) {
  // hide(groomingContainer);
  // hide(timer);
  ImgUni.remove();
  hide(wetUni);
  let counter = seconds;
  const interval = setInterval(() => {
    counterDisplay.textContent = counter;
    console.log(counter);
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      finishDry();
    }
  }, 1000);
}

// A function to countdown 5 seconds of grooming time
function groomCountdown(seconds) {
  // hide(groomingContainer);
  // hide(timer);
  hide(dryUni);
  let counter = seconds;
  const interval = setInterval(() => {
    counterDisplay.textContent = counter;
    console.log(counter);
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      finishGroom();
    }
  }, 1000);
}
