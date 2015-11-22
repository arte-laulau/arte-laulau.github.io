(function() {
  var closer = document.getElementById("closeProject");
  var latestWorks = document.getElementById("latestWorks");
  var works = document.getElementsByClassName("work-img");
  var lightbox = document.getElementById("lightbox");
  var lightboxContent = document.getElementById("lightboxContent");
  var body = document.getElementById("body");

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
                detailProject(data);          
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

  /*
    **PRINT PROJECTS CONTENT LIGHBTOX
  */
  function detailProject(data){
    for (var i = 0; i < works.length; i ++) {
      works[i].onclick = function() {
        currentWork = this.id;
        console.log(currentWork);
        lightboxContent.innerHTML = '<h2>'+data.latest[currentWork].title+'</h2><h4 class="category">'+data.latest[currentWork].category+'</h4><img class="img-project" src="'+data.latest[currentWork].imgWork+'"><h4>Descripción</h4><p>'+data.latest[currentWork].description+'</p>';
        displayProject();        
      }
    }
  }

  /*
    **CONTROLS SHOW AND CLOSE THE LIGHTBOX
  */
  function displayProject(){
    lightbox.style.display = "block";
    body.style.overflow = "hidden";

    closer.onclick = function(){
      lightbox.style.display = "none";
      body.style.overflow = "auto";
    }
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
    $('#main-nav li a').bind('click', function(){
      $('.menu-toggle').removeClass("on");
      $('#main-nav').removeClass('overlay');
      $('#main-nav ul').removeClass('extended');
    })
  }

  //allWorks TOGGLE
   function togglemenuWorks(){
    $('#menuWorks').on('click', function() {
      console.log("perra");
      $('.drop-down').toggleClass('extendedWorks');
    })
  } 

  return{
    menuToggle : menuToggle(),
    closeMenu : closeMenu(),
    togglemenuWorks: togglemenuWorks()
  }

})();


