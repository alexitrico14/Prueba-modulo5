// Cargar JSON

const cargarData = (() => {
    const dataAnimales = [];
    async function cargarAnimales() {
        const response = await fetch('./animales.json');
        const data = await response.json();
        const animales = data.animales;
        return animales;
    }
    function agregarAnimales(animales) {
        dataAnimales.push(animales);
    }
    return { cargarAnimales, agregarAnimales };
})();
export { cargarData };