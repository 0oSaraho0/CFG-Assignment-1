const services = [
  {
    name: "wash",
    price: 2.2,
  },
  {
    name: "dry",
    price: 2.3,
  },
  {
    name: "groom",
    price: 5.2,
  },
];
const chosenServices = [];
const container = document.getElementById("container");
const groomingContainer = document.getElementById("groomingContainer")
const wash = document.getElementById("wash");
const dry = document.getElementById("dry");
const groom = document.getElementById("groom");
const continueToGroom = document.getElementById("continue");
const serviceContainer = document.getElementById("service-conf");
let textService = document.getElementById("service-confirmation");
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

document.addEventListener('DOMContentLoaded',function(){
    hide(container)
})

// A function add to pick a service
function addService(e) {
  // connect the button to the array
  const serviceName = e.target.id;
  const selectedService = services.find(function (service) {
    return service.name === serviceName;
  });
  // push the chosen service to the chosen service array
  chosenServices.push(selectedService);

  let message = document.createElement("p");
  message.textContent = `Great we will ${serviceName} your unicorn!`;
  serviceContainer.appendChild(message);
  console.log(message);

  // disable the button once it has been chosen so it can't be chosen twice

  document.getElementById(e.target.id).setAttribute("disabled", true);
  console.log(chosenServices);

  continueToGroom.addEventListener("click", function () {
    hide(container);
    groomingTime()
  });
  
};

function groomingTime(){
  hide(groomingContainer);
}
