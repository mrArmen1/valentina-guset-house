$(document).ready(function () {
    // Инициализация слайдера
    $('.slider').slick({
        slidesToShow: 1,
        infinite: true,
        prevArrow: '<div class="slick-prev">◀</div>',
        nextArrow: '<div class="slick-next">▶</div>'
    });
});