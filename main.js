function openTab(page) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.removeProperty('background-color');
    }
    document.getElementById(page + 'Tab').style.backgroundColor = "rgb(40, 40, 40)";
    var x = document.getElementsByClassName("page");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(page).style.display = "inline";
}
/*
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
  */