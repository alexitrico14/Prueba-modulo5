export function actualizarPreview(previewDiv, imagen) {
    previewDiv.style.backgroundImage = `url('./assets/imgs/${imagen}')`;
    previewDiv.style.backgroundSize = 'cover';
    previewDiv.style.backgroundPosition = 'center';
}

export function crearTarjetaAnimal(animal, container) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'card m-2 col-3 p-0';
    tarjeta.innerHTML = `
        <img src="./assets/imgs/${animal.imagen}" alt="${animal.nombre}" class="card-img-top imagen-clickable" />
        <div class="card-body p-0">
            <button class="btn btn-primary btn-reset">
                <i class="fas fa-play"></i>
            </button>
        </div>
    `;
    container.appendChild(tarjeta);
    return tarjeta;
}

export function mostrarDetallesModal(animal) {
    document.getElementById('modalBody').innerHTML = `
        <img src="./assets/imgs/${animal.imagen}" alt="${animal.nombre}" class="img-fluid mb-2 img-modal" />
        <h5>${animal.nombre}</h5>
        <p>Edad: ${animal.edad}</p>
        <p>Comentario: ${animal.comentarios}</p>
    `;
    const modal = new bootstrap.Modal(document.getElementById('animalModal'));
    modal.show();
}

export function resetFormulario() {

    // Limpiar el div#preview pero mantener estilos
    const previewDefault = document.getElementById('preview');
    previewDefault.style.backgroundImage = '';  // Limpiar la imagen de fondo
    previewDefault.style.backgroundSize = '';  // Mantener el tamaño de fondo
    previewDefault.style.backgroundPosition = '';  // Mantener la posición

    // Resetear el select de animal
    const selectAnimal = document.getElementById('animal');
    selectAnimal.selectedIndex = 0; // Regresar al placeholder "Seleccione un animal"
    // Resetear el select de edad
    const selectEdad = document.getElementById('edad');
    selectEdad.selectedIndex = 0; // Regresar al placeholder "Seleccione un rango de años"

    // Reiniciar cualquier otro input o textarea si es necesario
    document.getElementById('comentarios').value = ''; // Limpiar el campo de comentarios

    
}
