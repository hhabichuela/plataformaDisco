let albFavoritos = [];
let spansAlbumes = document.querySelectorAll('.star');

function favoritos(span) {
    let album = span.getAttribute('data-album');
    
    if (!albFavoritos.includes(album)) {

        albFavoritos.push(album);
        span.textContent = "★";
        alert(album + " fue agregado a favoritos.");
    } else {

        let index = albFavoritos.indexOf(album);
        albFavoritos.splice(index, 1);
        span.textContent = "☆";
        alert(album + " fue sacado de favoritos.");
    }
}