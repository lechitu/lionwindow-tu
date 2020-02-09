(function($){
	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
	  if (!$(this).next().hasClass('show')) {
		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	  }
	  var $subMenu = $(this).next(".dropdown-menu");
	  $subMenu.toggleClass('show');

	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
		$('.dropdown-submenu .show').removeClass("show");
	  });

	  return false;
	});
})(jQuery)

$('.slide-block1').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    // autoplay: true,
    nav:true,
    // autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

window.onscroll = function () {
    console.log(window.pageYOffset);
    var nav = document.getElementById('menu-header');
    if (window.pageYOffset > 100) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}

$('.slide-main2').owlCarousel({
    loop: true,
    margin: 10,
    // autoplay: true,
    // autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

$('.slide-main3').owlCarousel({
    loop: true,
    margin: 10,
    // autoplay: true,
    // autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

new WOW().init();

$('.slide-main4').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // autoplay: true,
    // autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})