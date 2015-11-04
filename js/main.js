(function() {
  var width;
  var height;
  var largeHeader = document.getElementById('header-home');
  
	// Resize window header-home
  initHeader();

  function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = height+'px';
  }

})();


/**
  *Funcionalidades en jQuery, menu, galería

**/

(function(){

  //MENU TOGGLE
  function menuToggle(){
    $('.menu-toggle').on('click', function() {
      $(this).toggleClass("on");
      $('#main-nav').toggleClass('overlay');
      $('#main-nav ul').toggleClass('extended');
    })
  } 
  
  function closeMenu(){
    $('#main-nav li').bind('click', function(){
      $('.menu-toggle').removeClass("on");
      $('#main-nav').removeClass('overlay');
      $('#main-nav ul').removeClass('extended');
    })
  }
  

  return{
    menuToggle : menuToggle(),
    closeMenu : closeMenu() 
  }

})();


