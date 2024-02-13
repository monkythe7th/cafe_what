const fs = require('fs')

$(function(){
    // on scroll, move window section height, and change marker and url
    $("main").scroll(function(event){
        event.preventDefault();
        console.log(event)
        // 
    })

    // carousel
    // carousel = (callback) => {
    //     $('.carousel .image').animate({

    //     })
    // }
    // $('.carousel')

    // menu and ordering
    // menu:
    // home page menu images list
    let menu_images = new Array.from(fs.readDir('imgs/menu_images/'))
    menu_images.forEach(image => {
        let page = $('img').attr("src",image);
        $('#main #menu-section .menu-images').append(page)
    });
    // ordering:
})