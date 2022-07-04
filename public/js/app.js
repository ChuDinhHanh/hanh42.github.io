
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


let x = document.querySelector('.navbar');
$(Document).ready(function(){
$('.navbar-toggler-icon').click(function(){
  $('.card_mobile-screen').slideToggle();
})
})





let btn1 =  document.querySelector('.item2-mobile2.btn1xxx');
let btn2 = document.querySelector('.item2-mobile2.btn2xxx');
btn2.style.display ='none';
$(document).ready(function(){

  
  $(".btn1xxx").click(function(){
    $(".p1").slideUp();
    btn2.style.display = 'block';
    btn1.style.display = 'none';
    btn2.style.color = 'yellow'
  });


  $(".btn2xxx").click(function(){
    $(".p1").slideDown();
    btn1.style.display = 'block';
    btn2.style.display = 'none';
    btn1.style.color = 'yellow'
  });
});

let btn4 = document.querySelector('.item2-mobile2.btn4xxx');
btn4.style.display ='none';
let btn3 =  document.querySelector('.item2-mobile2.btn3xxx');
$(document).ready(function(){
  $(".btn3xxx").click(function(){
    $(".p2").slideUp();
    btn4.style.display = 'block';
    btn3.style.display = 'none';
    btn4.style.color = 'yellow'
  });

  $(".btn4xxx").click(function(){
    $(".p2").slideDown();
    btn3.style.display = 'block';
    btn4.style.display = 'none';
    btn3.style.color = 'yellow'
  });
});

let btn6 = document.querySelector('.item2-mobile2.btn6xxx');
btn6.style.display ='none';
let btn5 =  document.querySelector('.item2-mobile2.btn5xxx');
$(document).ready(function(){
  $(".btn5xxx").click(function(){
    $(".p3").slideUp();
    btn6.style.display = 'block';
    btn5.style.display = 'none';
    btn6.style.color = 'yellow'
  });

  $(".btn6xxx").click(function(){
    $(".p3").slideDown();
    btn5.style.display = 'block';
    btn6.style.display = 'none';
    btn5.style.color = 'yellow'
  });
});

let btn8 = document.querySelector('.item2-mobile2.btn8xxx');
btn8.style.display ='none';
let btn7 =  document.querySelector('.item2-mobile2.btn7xxx');
$(document).ready(function(){
  $(".btn7xxx").click(function(){
    $(".p4").slideUp();
    btn8.style.display = 'block';
    btn7.style.display = 'none';
    btn8.style.color = 'yellow'
  });

  $(".btn8xxx").click(function(){
    $(".p4").slideDown();
    btn7.style.display = 'block';
    btn8.style.display = 'none';
    btn7.style.color = 'yellow'
  });
});

let btn10 = document.querySelector('.item2-mobile2.btn10xxx');
btn10.style.display ='none';
let btn9 =  document.querySelector('.item2-mobile2.btn9xxx');
$(document).ready(function(){
  $(".btn9xxx").click(function(){
    $(".p5").slideUp();
    btn10.style.display = 'block';
    btn9.style.display = 'none';
    btn10.style.color = 'yellow'
  });

  $(".btn10xxx").click(function(){
    $(".p5").slideDown();
    btn9.style.display = 'block';
    btn10.style.display = 'none';
    btn9.style.color = 'yellow'
  });
});


let btn12 = document.querySelector('.item2-mobile2.btn12xxx');
btn12.style.display ='none';
let btn11 =  document.querySelector('.item2-mobile2.btn11xxx');
$(document).ready(function(){
  $(".btn11xxx").click(function(){
    $(".p6").slideUp();
    btn12.style.display = 'block';
    btn11.style.display = 'none';
    btn12.style.color = 'yellow'
  });

  $(".btn12xxx").click(function(){
    $(".p6").slideDown();
    btn11.style.display = 'block';
    btn12.style.display = 'none';
    btn11.style.color = 'yellow'
  });
});

//carousel
$('.owl-carousel').owlCarousel({
  stagePadding: 0,
  loop:true,
  margin:30,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      700:{
          items:2
      },
      1200:{
          items:3
      }
  }
})



