$(function(){
    // back to top operation
    $(".bottom_to_top").click(function(){
       $("body,html").animate({scrollTop:0},1555)
    });

    // $(window).scroll(function(){
    //    let scroll = $(this).scrollTop()
    //    console.log(scroll)
    //    if(scroll > 355){
    //     $(".bottom_to_top").css(
    //         "display" , "block"
    //     )
    //    }
    //    else{
    //     $(".bottom_to_top").css(
    //         "display" , "none"
    //     )
    //    }



    // fixed navbar operation
    $(window).scroll(function(){
        let scroll = $(this).scrollTop()
        console.log(scroll)
        if(scroll > 355){
    $(".bottom_to_top").fadeIn(555)
        }else{
    $(".bottom_to_top").fadeOut(555)
        }
        if(scroll > 135){
            $(".nav").addClass("fixed")
        }
        else{
            $(".nav").removeClass("fixed")
        }
    })


    // preloader
    $(window).on('load',function(){
        $(".preloader_main").delay(155).fadeOut(555)
    })


    // counter up
    $('.counter').counterUp({
        delay: 155,
        time: 3555
    });



    // mixit up
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.service_main'
        },
        animation: {
            duration: 300
        }
    });

});





