// Desaparecer el botón ScrollTop al cargar la página
$(document).ready(function() {
    $('#flechabtn').hide(); // Ocultar el botón al inicio
});

// Mostrar u ocultar el botón ScrollTop dependiendo del scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 280) {
        $('#flechabtn').fadeIn();
    } else {
        $('#flechabtn').fadeOut();
    }
});


/*
// Función para manejar el scroll top
function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#flechabtn').fadeIn();
    } else {
        $('#flechabtn').fadeOut();
    }
});

function topFunction() {
    $('html, body').animate({scrollTop: 0}, 'smooth');
}*/