import { Animal, Leon, Tigre, Oso, Serpiente, Aguila, Pablito } from './modulos/class.js';
import { actualizarPreview, crearTarjetaAnimal, mostrarDetallesModal, resetFormulario } from './modulos/dom.js';
import { cargarData } from './modulos/data.js';
const animalesJson = await cargarData.cargarAnimales();


async function registrarAnimal() {
    try {
        const data = await cargarData.cargarAnimales();


        const animalSeleccionado = document.getElementById('animal').value;
        const edadSeleccionada = document.getElementById('edad').value;
        const comentario = document.getElementById('comentarios').value;

        const animalData = data.find(a => a.name === animalSeleccionado);

        if (!animalData) {
            throw new Error('Animal no encontrado');
        }

        let animal;

        switch (animalSeleccionado) {
            case 'Leon':
                animal = new Leon(animalData.name, animalData.imagen, `./assets/sounds/${animalData.sonido}`, edadSeleccionada, comentario);
                break;
            case 'Tigre':
                animal = new Tigre(animalData.name, animalData.imagen, `./assets/sounds/${animalData.sonido}`, edadSeleccionada, comentario);
                break;
            case 'Oso':
                animal = new Oso(animalData.name, animalData.imagen, `./assets/sounds/${animalData.sonido}`, edadSeleccionada, comentario);
                break;
            case 'Serpiente':
                animal = new Serpiente(animalData.name, animalData.imagen, `./assets/sounds/${animalData.sonido}`, edadSeleccionada, comentario);
                break;
            case 'Aguila':
                animal = new Aguila(animalData.name, animalData.imagen, `./assets/sounds/${animalData.sonido}`, edadSeleccionada, comentario);
                break;
            case 'Pablito':
                animal = new Pablito(animalData.name, animalData.imagen, `./assets/sounds/${animalData.sonido}`, edadSeleccionada, comentario);
                break;
            default:
                animal = new Animal(animalData.name, animalData.imagen, `./assets/sounds/${animalData.sonido}`, edadSeleccionada, comentario);
        }

        const previewDiv = document.getElementById('preview');

        actualizarPreview(previewDiv, animal.imagen);

        const contenedorAnimales = document.getElementById('Animales');
        const tarjeta = crearTarjetaAnimal(animal, contenedorAnimales);

        const imgAnimal = tarjeta.querySelector('.imagen-clickable');
        imgAnimal.addEventListener('click', () => mostrarDetallesModal(animal));

        const btnReproducir = tarjeta.querySelector('.btn-primary');
        btnReproducir.addEventListener('click', () => animal.reproducirSonido());

    } catch (error) {
        console.error('Error:', error);
    }


}

document.getElementById('animal').addEventListener('change', async function () {
    try {
        const data = await cargarData.cargarAnimales();

        const animalSeleccionado = this.value;

        const animalData = data.find(a => a.name === animalSeleccionado);


        if (!animalData) {
            throw new Error('Animal no encontrado');
        }

        const previewDiv = document.getElementById('preview');
        actualizarPreview(previewDiv, animalData.imagen);

    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('btnRegistrar').addEventListener('click', () => {
    registrarAnimal();
    setTimeout(() => {
        resetFormulario();
    },10);    
});
