const services = [
"wash",
"dry",
"groom",
];
const chosenServices = [];
const container = document.getElementById("container");
const groomingContainer = document.getElementById("grooming-container");
const groomingContainer2 = document.getElementById("grooming-container2");
const ImgUni = document.getElementById("img-uni");

const counterDisplay = document.getElementById("counter");

const wash = document.getElementById("wash");
const dry = document.getElementById("dry");
const groom = document.getElementById("groom");
const continueToGroom = document.getElementById("continue");
const serviceContainer = document.getElementById("service-conf");
let textService = document.getElementById("service-confirmation");
const wetUni = document.createElement("img");
const washBtn = document.createElement("button");
const dryBtn = document.createElement("button");
const groomBtn = document.createElement("button");

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
    console.log(services);
  };
  if (chosenServices.includes('dry')){
    dryBtn.innerHTML = "Start Dry";
    dryBtn.setAttribute("id", "startDry");
    document.body.appendChild(dryBtn);
    let startDry = document.getElementById("startdry");
    startDry.addEventListener("click", dryTime);
  };

  if (chosenServices.includes('groom')){
    groomBtn.innerHTML = "Start Groom";
    groomBtn.setAttribute("id", "startGroom");
    document.body.appendChild(groomBtn);
    let startGroom = document.getElementById("startGroom");
    startGroom.addEventListener("click", groomTime);
};
}
function washTime() {
  washBtn.remove();
  console.log("washing now");
  startCountdown(5);
}

function finishWashing(){
  // hide(groomingContainer);
  // hide(timer);  
  wetUni.src = "./assets/images/wet-unicorn.jpeg";
  let scr = document.getElementById("grooming-container2")
  counterDisplay.textContent = "";
  scr.appendChild(wetUni)
  console.log(wetUni)

  let finishWash = document.createElement('p');
  finishWash.innerHTML = "Great she is all nice and clean";
  finishWash.setAttribute('id', 'finish-wash');
  document.body.appendChild(finishWash)

    // }else if (chosenServices.includes('groom')){
  //   groomTime();
  // }else{
  //   finishWash();
  // }
  
}

function dryTime(){
  console.log('test')
}

function groomTime(){
  console.log('test')
}

// function finish(){
//   console.log('test')
// }

function startCountdown(seconds) {
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
      if (chosenServices.includes('wash')){
        finishWashing();
        
      }
      

      
    }
  }, 1000);
}


