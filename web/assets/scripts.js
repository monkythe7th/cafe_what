// const fs = require('fs')

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

    // Call to Action button actions
    $('button#order').on('click', function(){
        window.location.pathname = "/menu.html"
    })

    // menu and ordering
    // menu:
    // home page menu images list
    // menu list .json file
    fetch('assets/menu_list.json').then(x => x.text()).then(y => {
        console.log(y)
        let menu_images = y.slice(1,-1).split(', ')
        console.log(menu_images)
        menu_images.forEach(image => {
            let source = "assets/imgs/menu_images/" + image.trim().slice(1,-1)
            let page = $("<img>").addClass('menu-image');
            page.attr("src",source)
            console.log(source)
            $('.menu-images').append(page)
        });
    })

    // ordering:
})