class Aliado {
    constructor (nombre, oficio, vida, ataque){
        this.nombre = nombre;
        this.oficio = oficio;
        this.vida = vida;
        this.atque = ataque;
    }
}

let arqueroN1 = new Aliado("Arquero Nivel 1", "Arquero", 1000, 25)
let guerreroN1 = new Aliado("Guerrero Nivel 1", "Guerrero", 1200, 30)
let caballeroN1 = new Aliado("Caballero Nivel 1", "Caballero", 1500, 35)
let hechizeroN1 = new Aliado("Hechizero Nivel 1", "Hechicero", 1500, 34)

console.log(arqueroN1)
console.log(guerreroN1)
console.log(caballeroN1)
console.log(hechizeroN1)


let Inicio = alert ("Bienvenidos a nuestra beta!")
let Inicio1 = alert ("Tienes que escoger entre alguno de nuestros 4 aliados")
let Inicio2 = alert ("Aliado N°1: ARQUERO Nivel 1 con una vida de 1000 y un ataque 25")
let Inicio3 = alert ("Aliado N°2: GUERRERO Nivel 1 con una vida de 1200 y un ataque 30")
let Inicio4 = alert ("Aliado N°3: CABALLERO Nivel 1 con una vida de 1500 y un ataque 35")
let Inicio5 = alert ("Aliado N°4: HECHICERO Nivel 1 con una vida de 1500 y un ataque 34")


let eleccion = prompt ("¿Cual va a ser el Aliado que escogeras?")
switch(eleccion.toLowerCase()){
    case "arquero":
        alert ("Haz escogido a " + eleccion);
        break;
    case "guerrero":
        alert ("Haz escogido a " + eleccion);
        break;
    case "caballero":
        alert ("Haz escogido a " + eleccion);
        break;
    case "hechizero":
        alert ("Haz escogido a " + eleccion);
        break;
    default:
        alert (eleccion + " no esta disponible")
}


class Villano {
    constructor (nombre, oficio, vida, ataque){
        this.nombre = nombre;
        this.oficio = oficio;
        this.vida = vida;
        this.atque = ataque;
    }
}

let orcoN1 = new Villano("Orco Nivel 1", "Orco", 2000, 15)
console.log(orcoN1)

let verus = alert (eleccion + " peleara contra " + orcoN1.nombre)

console.log(orcoN1.vida)
console.log(eleccion.vida)