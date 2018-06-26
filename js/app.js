$(document).ready(function(){

  (function(){
    var animenuToggle = document.querySelector('.animenu__toggle'),
        animenuNav    = document.querySelector('.animenu__nav'),
        hasClass = function( elem, className ) {
          return new RegExp( ' ' + className + ' ' ).test( ' ' + elem.className + ' ' );
        },
        toggleClass = function( elem, className ) {
          var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
          if( hasClass(elem, className ) ) {
            while( newClass.indexOf( ' ' + className + ' ' ) >= 0 ) {
              newClass = newClass.replace( ' ' + className + ' ' , ' ' );
            }
            elem.className = newClass.replace( /^\s+|\s+$/g, '' );
          } else {
            elem.className += ' ' + className;
          }
        },           
        animenuToggleNav =  function (){        
          toggleClass(animenuToggle, "animenu__toggle--active");
          toggleClass(animenuNav, "animenu__nav--open");        
        }

    if (!animenuToggle.addEventListener) {
        animenuToggle.attachEvent("onclick", animenuToggleNav);
    }
    else {
        animenuToggle.addEventListener('click', animenuToggleNav);
    }
  })()

    $(".header-top-block").removeClass("nav_default");
    $('.menu li a').removeClass("default-menu-list");
    $(window).scroll(function(){
        if ($(window).width() <= 768) {
            $("header").removeClass("header_fixed").fadeIn('fast');
        } else {
            if ($(this).scrollTop() > 83) {
                $("header").addClass("header_fixed").fadeIn('fast');
            }
            else{
                $("header").removeClass("header_fixed").fadeIn('fast');
            }
        };
    });

    var $nav = $('.top-nav-block');
    var $win = $(window);
    var winH = $win.height();   // Get the window height.

    $win.on("scroll", function () {
        if ($(window).width() <= 768) {
          $nav.addClass("nav-fixed");
        } else {
          if ($(window).scrollTop() > winH-85 ) {
            $nav.addClass("nav-fixed");
          } else{
              $nav.removeClass("nav-fixed");
            }
          }
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });

    // Parallax
    $('.main-screen').parallax();
  
    function counter(className, value, delay){
        $(className).counter({
          val: value,
          countTrigger: function ($counter) {
            setInterval(function() {
                $.counter.plusOne($counter);
            }, delay);
        }
      });
    };
    counter('.counter1', '80', 8000);
    counter('.counter2', '56', 5000);
    counter('.counter3', '44', 4000);
    counter('.counter4', '32', 3000);

    $(document).ready(function(){
      $('.vacancies-left').slick({
        infinite: true,
        speed: 300,
        dots: true,
        arrows: true
      });

      $('.reviews-list').slick({
        infinite: true,
        speed: 300,
        dots: true,
        arrows: true
      });
    });


  $(window).scroll(function (){
    if ($(window).width() >= 768) {
      function animate(className, animation, delay){
        
            $(className).each(function (){
                $(this).addClass('hidden');
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop() + $(window).height();
                if (imagePos < topOfWindow-delay) {
                    $(this).addClass('visible animated ' + animation );
                }
            });
       
      }
      animate('.services-left', 'bounceInLeft', 100);
      animate('.services-center', 'bounceInUp', 100);
      animate('.services-right', 'bounceInRight', 100);
      animate('.process-left', 'bounceInLeft', 100);
      animate('.process-center', 'bounceInUp', 100);
      animate('.process-right', 'bounceInRight', 100);
      animate('.vacancies-left', 'bounceInLeft', 100);
      animate('.vacancies-right', 'bounceInRight', 100);
      animate('.contact-left', 'bounceInLeft', 100);
      animate('.contact-right', 'bounceInRight', 100);
      animate('.satisfied-reviews-list', 'bounceInUp', 100);
    }
  });﻿




  $(document).ready(function(){
    $(".nav-list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top-150;
      $('body,html').animate({scrollTop: top}, 1500);
    });
  });

  $(".phone-input").mask("+38(999)999-9999");

});﻿

