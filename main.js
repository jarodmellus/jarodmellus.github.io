selected = "home"

function openTab(page) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.removeProperty('background-color');
    }

    var y = document.getElementById(selected);
    y.classList.toggle('collapsed');
    y.classList.toggle('expanded');

    
    if(y.isEqualNode(document.getElementById("contact"))) { //expand social media
    
      //toggle expanded
      //toggle collapsed      
      $("#social-container").toggleClass("collapsed");
      $("#social-container").toggleClass("expanded");
      var x = document.getElementsByClassName("social");
      for(i=0; i < x.length; i++) {
        x[i].classList.toggle("collapsed");
        x[i].classList.toggle("expanded");
      }

    }
    

    document.getElementById(page + 'Tab').style.backgroundColor = "rgba(40, 40, 40,.25)";

    var e = document.getElementById(page)
    //e.style.display = "inline";
    e.classList.toggle('collapsed')
    e.classList.toggle('expanded')
    selected=page;

    
    if(e.isEqualNode(document.getElementById("contact"))) { //expand social media
      //toggle expanded
      //toggle collapsed
      $("#social-container").toggleClass("collapsed")
      $("#social-container").toggleClass("expanded")
      var x = document.getElementsByClassName("social");
      for(i=0; i < x.length; i++) {
        x[i].classList.toggle("collapsed");
        x[i].classList.toggle("expanded");
      }
    }
    

    //e.scrollTop = 0;

    var m = document.getElementsByClassName("main");
    m[0].scrollTop = 0;

    //document.body.scrollTop = document.documentElement.scrollTop = 0;
    //$(".main").animate({ scrollTop: 0 }, "fast");
    
}

$(function(){
  var $jittery = $('.jittery'),
      aText    = $jittery.text().split(''),
      letters = '';
  
  for(var i = 0; i < aText.length; i++){
    letters += '<span>'+aText[i]+'</span>';
  }
  
  $jittery.empty().append(letters);
  
  $.each($('span', $jittery), function(i){
    $(this).css('animation-delay', '-'+i+'70ms');
  });
});