$('body').on('click', '.tabs a', (e) => {
    $('.tabs a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('img[data-tab]').removeClass('active');
    $(`img[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
});

$('body').on('click', '.question', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).next().slideToggle();
});

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('html').toggleClass('overflow');
});
