// Clase base Animal
class Animal {
  constructor(nombre, imagen, sonido, edad, comentarios) {
      this.nombre = nombre;
      this.imagen = imagen;
      this.sonido = sonido;
      this.edad = edad;
      this.comentarios = comentarios;
  }

  reproducirSonido() {
      const audio = new Audio(this.sonido);
      audio.play();
  }
}

// Clases hijas de Animal 
class Leon extends Animal {
  constructor(nombre, imagen, sonido, edad, comentarios) {
      super(nombre, imagen, sonido, edad, comentarios);
  }
}

class Tigre extends Animal {
  constructor(nombre, imagen, sonido, edad, comentarios) {
      super(nombre, imagen, sonido, edad, comentarios);
  }
}

class Oso extends Animal {
  constructor(nombre, imagen, sonido, edad, comentarios) {
      super(nombre, imagen, sonido, edad, comentarios);
  }
}

class Serpiente extends Animal {
  constructor(nombre, imagen, sonido, edad, comentarios) {
      super(nombre, imagen, sonido, edad, comentarios);
  }
}

class Aguila extends Animal { 
  constructor(nombre, imagen, sonido, edad, comentarios) {
      super(nombre, imagen, sonido, edad, comentarios);
  }
}

export { Animal, Leon, Tigre, Oso, Serpiente, Aguila };
