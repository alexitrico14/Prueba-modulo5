// Clase base Animal
class Animal {
  constructor(nombre, imagen, sonido, edad, comentarios) {
      this._nombre = nombre;
      this._imagen = imagen;
      this._sonido = sonido;
      this._edad = edad;
      this._comentarios = comentarios;
  }

  // Get
  get nombre() {
      return this._nombre;
  }

  get imagen() {
      return this._imagen;
  }

  get sonido() {
      return this._sonido;
  }

  get edad() {
      return this._edad;
  }

  get comentarios() {
      return this._comentarios;
  }

  reproducirSonido() {
      const audio = new Audio(this._sonido);
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

class Pablito extends Animal {
  constructor(nombre, imagen, sonido, edad, comentarios) {
      super(nombre, imagen, sonido, edad, comentarios);
  }
}

export { Animal, Leon, Tigre, Oso, Serpiente, Aguila, Pablito };

