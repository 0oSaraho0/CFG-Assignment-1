const services = [
"wash",
"dry",
"groom",
];
const chosenServices = [];
const container = document.getElementById("container");
const groomingContainer = document.getElementById("grooming-container");
const groomingContainer2 = document.getElementById("grooming-container2");
const wash = document.getElementById("wash");
const dry = document.getElementById("dry");
const groom = document.getElementById("groom");
const continueToGroom = document.getElementById("continue");
const serviceContainer = document.getElementById("service-conf");
let textService = document.getElementById("service-confirmation");
const wetUni = document.createElement("img");
const washBtn = document.createElement("button");
console.log(textService);

console.log(wash);
console.log("hello");

wash.addEventListener("click", addService);
dry.addEventListener("click", addService);
groom.addEventListener("click", addService);

// toggles the hide class on hidden element
function hide(hiddenElement) {
  hiddenElement.classList.toggle("hide");
}

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

  let message = document.createElement("p");
  message.textContent = `Great we will ${serviceName} your unicorn!`;
  serviceContainer.appendChild(message);
  console.log(message);

  // disable the button once it has been chosen so it can't be chosen twice

  document.getElementById(e.target.id).setAttribute("disabled", true);
  console.log(chosenServices);

  continueToGroom.addEventListener("click", function () {
    hide(container);
    groomingTime();
  });
}

function groomingTime() {
  hide(groomingContainer);
  if (chosenServices.includes('wash')){
    washBtn.innerHTML = "Start Wash";
    washBtn.setAttribute("id", "startWash");
    document.body.appendChild(washBtn);
    let startWash = document.getElementById("startWash");
    startWash.addEventListener("click", washTime);
    console.log(services)
}

  }
  

function washTime() {
  washBtn.remove();
  console.log("washing now");
  startCountdown(5);
}

function finishWashing(){
  
  wetUni.src = "assets/images/wet-unicorn.jpeg";
  let scr = document.getElementbyId("groomingContainer2")
  scr.appendChild(wetUni)
  console.log(wetUni)

  let finishWash = document.createElement('p');
  finishWash.innerHTML = "Great she is all nice and clean";
  finishWash.setAttribute('id', 'finish-wash');
  document.body.appendChild(finishWash)
  
}

function startCountdown(seconds) {
  let counter = seconds;
  const interval = setInterval(() => {
    groomingContainer2.innerHTML = counter;
    console.log(counter);
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      if (chosenServices.includes('wash')){
        finishWashing();
      }
      

      
    }
  }, 1000);
}

