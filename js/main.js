(function() {

  var latestWorks = document.getElementById("latestWorks");
  
  /*var width;
  var height;
  var largeHeader = document.getElementById('header-home');

  // Resize window header-home
  initHeader();

  function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = height+'px';
  }*/
  
  /*
    **REQUEST JSON
  */
  function callingJson() {
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
             if(xmlhttp.status == 200){
                data = JSON.parse(xmlhttp.responseText);
                showData(data);                
                console.log(data);
             }
             else if(xmlhttp.status == 400) {
                alert('There was an error 400')
             }
             else {
                 alert('something else other than 200 was returned')
             }
          }
      }

      xmlhttp.open("GET", "js/works.json", true);
      xmlhttp.send();
  }
  callingJson();

  /*
    **PRINTS latest-works
  */
  function showData(){
    var works = "";
    for (var i = 0; i < data.latest.length; i++) {
      works += '<li><figure><img class="'+data.latest[i].nameId+'-img" src="'+data.latest[i].imgWork+'"><figcaption class="bottom-to-top"><h3>'+data.latest[i].title+'</h3><p id="'+data.latest[i].id+'" class="work-img">Descripción</p></figcaption><figure></li>';
    };
    latestWorks.innerHTML = works;
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


