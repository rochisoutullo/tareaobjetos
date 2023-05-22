//OBJECTO
class Persona {
    constructor(nombre,apellido) {
      this.nombre = nombre
      this.apellido = apellido
      this.mostrarMensaje = this.mostrarMensaje
    } 
    mostrarMensaje() {
      alert('¡Hola, soy' + this.nombre + this.apellido + '!, en que puedo ayudarle?')
    }
  }
  const asesora1 = new Persona(' Rocio ', 'Soutullo')
  asesora1.mostrarMensaje()

  class Adopcion {
    constructor (nombre, raza, edad) {
        this.nombre = nombre
        this.raza = raza
        this.edad = edad
    }
    tramite () {
        let seleccion = prompt('¿A quien deseas adoptar?')
        alert('Felicitaciones! ' + seleccion + ' ' + this.raza + ' ya es parte de tu familia ')
        alert('¡Gracias por tu adopción!')
    }
}

const Luna = new Adopcion ('Luna', 'Caniche', 3)
const Rocky = new Adopcion ('Rocky', 'Labrador', 4)
const Nala = new Adopcion ('Nala', 'Akita Inu', 1)

Luna.tramite()