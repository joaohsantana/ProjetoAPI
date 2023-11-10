$(document).ready(function(){
    // Configurar o carrossel expandido
    $('#carouselImagens').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
});

function expandirAlbum(id) {
    // Lógica para obter os dados do álbum e imagens associadas
    var albumTitulo = "Álbum " + id; // Substitua pela lógica real
    var imagens = [
        "https://via.placeholder.com/800x400",
        "https://via.placeholder.com/800x400",
        "https://via.placeholder.com/800x400"
    ]; // Substitua pela lógica real

    // Atualizar o conteúdo do álbum expandido
    $('#albumTitulo').text(albumTitulo);
    $('#carouselImagens').slick('unslick').empty(); // Limpar o carrossel antes de adicionar novas imagens

    imagens.forEach(function(imagem) {
        $('#carouselImagens').append('<div><img class="imagem" src="' + imagem + '" alt="Imagem do Álbum"></div>');
    });

    // Ocultar a visualização inicial e mostrar o álbum expandido
    $('.album-container').hide();
    $('#albumExpandido').show();

    // Configurar novamente o carrossel expandido após adicionar imagens
    $('#carouselImagens').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
}

function adicionarAlbum() {
    // Lógica para adicionar um novo álbum
    alert("Lógica para adicionar um novo álbum");
}

function fecharAlbum() {
    // Mostrar a visualização inicial e ocultar o álbum expandido
    $('.album-container').show();
    $('#albumExpandido').hide();
}