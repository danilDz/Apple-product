$(document).ready(() =>{
    $('.logo-item, .nav-item').each((index, element) => {
        $(element).click(function(){
            const id = $(this).attr('href');
            const offset = $(id).offset().top;
            $('html').animate({
                scrollTop:offset
            },1800);
        })
    })
});

