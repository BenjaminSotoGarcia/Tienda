const max_power = 60;
const min_power = 20;


let vidaPikachu = 800;
let vidaMewtwo = 1000;

console.log(vidaPikachu)
console.log(vidaMewtwo)

let round = 0; 

while (vidaPikachu > 0 && vidaMewtwo > 0) {
round+=1
let ataquePikachu = Math.ceil(Math.random() * (max_power - min_power) + min_power)
console.log("Ataque de Pikachu " + ataquePikachu)
let ataqueMewtwo = Math.ceil(Math.random() * (max_power - min_power) + min_power)
console.log("Ataque de Mewtwo " + ataqueMewtwo)

if(ataquePikachu > ataqueMewtwo) {
    vidaMewtwo -=ataquePikachu
}else{
    vidaPikachu -=ataqueMewtwo
}
console.log("Round N° " + round)
console.log("Vida de Pikachu " + vidaPikachu)
console.log("Vida de Mewtwo  " + vidaMewtwo)
}

if(vidaPikachu>0){
    console.log("Gano Pikachu")
}else{
    console.log("Gano Mewtwo")
}