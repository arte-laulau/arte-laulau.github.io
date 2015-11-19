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
  
});