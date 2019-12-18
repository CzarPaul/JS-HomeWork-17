$(document).ready(function(){
    $('.btns').on('click', function(){
        $('.overlay').fadeIn('slow', function(){
            $('.modal').slideDown(420);
        });
        });
    $('.close').on('click', function(){
        $('.modal').slideUp(420, function(){
            $('.overlay').fadeOut('slow');
        });
    });  
    });