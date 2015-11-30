(function(){
  var all_Works = document.getElementById("all_Works");
  var body = document.getElementById("body");
  var closer = document.getElementById("closeProject");
  var works = document.getElementsByClassName("work-img");
  var lightbox = document.getElementById("lightbox");
  var lightboxContent = document.getElementById("lightboxContent");

  /*
    **REQUEST JSON
  */
  function callingJson() {
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
             if(xmlhttp.status == 200){
                data = JSON.parse(xmlhttp.responseText);
                showAll(data);                
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
    **PRINTS all-works
  */
  function showAll(){
    var work = "";
    for (var i = 0; i < data.allWorks.length; i++) {
      work += '<li><figure><img class="'+data.allWorks[i].nameId+'-img" src="'+data.allWorks[i].imgWork+'"><figcaption class="bottom-to-top"><h3>'+data.allWorks[i].title+'</h3><p id="'+data.allWorks[i].id+'" class="work-img">Descripción</p></figcaption><figure></li>';
    };
    all_Works.innerHTML = work;
  }

  /*
    **PRINT PROJECTS CONTENT LIGHBTOX
  */
  function detailProject(data){
    for (var i = 0; i < works.length; i ++) {
      works[i].onclick = function() {
        currentWork = this.id;
        lightboxContent.innerHTML = '<h2>'+data.allWorks[currentWork].title+'</h2><h4 class="category">'+data.allWorks[currentWork].category+'</h4><img class="img-project" src="'+data.allWorks[currentWork].imgWork+'"><h4>Descripción</h4><p>'+data.allWorks[currentWork].description+'</p>';
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