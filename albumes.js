let albFavoritos = [];
let spansAlbumes = document.querySelectorAll('.star');

spansAlbumes.forEach(span => {
    span.addEventListener('click', function() {
        let album = this.getAttribute('data-album');
        if (!albFavoritos.includes(album)) {
            albFavoritos.push(album);
            this.querySelector('i').classList.remove('fa-regular');
            this.querySelector('i').classList.add('fa-solid');
            alert(album + " fue agregado a favoritos.");
        } else {
            let index = albFavoritos.indexOf(album);
            albFavoritos.splice(index, 1);
            this.querySelector('i').classList.remove('fa-solid');
            this.querySelector('i').classList.add('fa-regular');
            alert(album + " fue sacado de favoritos.");
        }
    });
});