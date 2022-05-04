const search = document.querySelector('#inputSearch');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    console.log(search.value);
    resultado.innerHTML = '';
    const texto = search.value.toLowerCase();
    for (let producto of productos) {
        let nombre = producto.nombre.toLocaleLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            $('.search-box').css({ 'visibility': 'visible' });
            resultado.innerHTML += `
                <li><i class="fa-solid fa-magnifying-glass lupa"></i>${producto.nombre} - $${producto.valor}</li>
            `
        }
    }
    if (resultado.innerHTML === '') {
        resultado.innerHTML += `
            <li>Producto no encontrado...</li>
        `
    }
}

search.addEventListener('keyup', filtrar);
