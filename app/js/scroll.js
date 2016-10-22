
$(document).ready(function(){
    // Фикмированная шапка при скролле
    $("#header").removeClass("default");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
            $("#header").addClass("default").fadeIn('fast');
        } else {
            $("#header").removeClass("default").fadeIn('fast');
        };
    });

    // Плавный скролл по якорям
    $('a[href^="#"]').click(function () { 
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top-80;
        if($.browser.safari){
        $('body').animate( { scrollTop: destination }, 1000 );
        } else {
            $('html').animate( { scrollTop: destination }, 1000 );
        }
        return false;
   });
});


