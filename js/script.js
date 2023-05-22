//OBJECTO
class Persona {
    constructor(nombre,apellido) {
      this.nombre = Rocío;
      this.apellido = Soutullo;
    }
  
    mostrarMensaje() {
      alert('¡Hola, soy' + this.nombre + this.apellido);
    }
  }
  
  //objeto a partir de la clase constructora
  const asesora1 = new Persona('Rocio', 'Soutullo')
  
  // Llamar al método personalizado para mostrar el mensaje
  asesora1.mostrarMensaje();