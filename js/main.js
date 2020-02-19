/* mobile menu */
const Hamburger = document.querySelector('.HamburgerButton');
const Nav = document.querySelector('.NavBar__Nav');

Hamburger.addEventListener('click', function(){
  Nav.classList.toggle('show');
});

/* owlcarousel */

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:30,
      mouseDrag:true,
      responsiveClass:true,
      responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1024:{
            items:4
        }
      }
    });
  });


  