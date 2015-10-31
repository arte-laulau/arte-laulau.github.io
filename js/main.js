(function() {
  var width;
  var height;
  var largeHeader = document.getElementById('header-home');
  var largeContact = document.getElementById('contact');

	// Resize window header-home
  initHeader();

  function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = height+'px';
    largeContact.style.height = height+'px';
  }

})();

//MENU TOGGLE
$("#menu-toggle").click(function(){
	$("#main-nav ul").toggleClass("extended");
});

