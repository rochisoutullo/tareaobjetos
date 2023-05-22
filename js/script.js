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
  
  //objeto a partir de la clase constructora
  const asesora1 = new Persona(' Rocio ', 'Soutullo')
  
  // Llamar al método personalizado para mostrar el mensaje
  asesora1.mostrarMensaje()

  class Adopcion {
    constructor (nombre, raza, edad) {
        this.nombre = nombre
        this.raza = raza
        this.edad = edad
    }
    tramite () {
        let seleccion = Number(prompt('¿A quien deseas adoptar?'))
        alert('Felicitaciones! ' + this.nombre + ' ' + this.raza + ' ya es parte de tu familia ')
        alert('¡Gracias por tu adopción!')
    }
}

const perro1 = new Adopcion ('Luna', 'Caniche', 3)
const perro2 = new Adopcion ('Rocky', 'Labrador', 4)
const perro3 = new Adopcion ('Nala', 'Akita Inu', 1)

perro1.tramite()