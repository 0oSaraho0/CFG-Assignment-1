const services = ["wash", "dry", "groom"];
const chosenServcies = [];
const container = document.getElementById("container");
const wash = document.getElementById('wash')
const dry = document.getElementById('dry')
const groom = document.getElementById('groom')


console.log(wash)
console.log('hello')

wash.addEventListener("click", pickService)
dry.addEventListener("click", pickService)
groom.addEventListener("click", pickService)  


function pickService(e) {
    // connects button event listener to the service array
    const serviceName = e.target.id;
    const selectedService = services.find(function (service){
        return services.name === serviceName;    
    });
    console.log(serviceName)

    let itemIsChosen = false;
    for(let i = 0; i < services.length; i++){
        if (service[i].name === serviceName)

    };
    itemIsChosen = true

}
