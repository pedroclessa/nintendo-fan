document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1,         /* Exibe um slide por vez */
        spaceBetween: 10,         /* Espaçamento entre os slides */
        loop: true,               /* Habilita o looping de slides */
        navigation: {             /* Navegação com botões */
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {             /* Paginação (se necessário) */
            el: '.swiper-pagination',
            clickable: true
        },
        resizeObserver: true,     /* Ativa o ajuste dinâmico de layout */
        preloadImages: true,      /* Garante que as imagens sejam carregadas antes da navegação */
    });
});


