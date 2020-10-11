
$(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown('').hide('');
      $("#design").show('');
    });
    $("#design").click(function(){
      $("#design").slideUp('');
      $("#design-image").slideDown('');
    });
  });



$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('').hide('');
      $("#development").show('');
    });
    $("#development").click(function(){
      $("#development").slideUp('');
      $("#development-image").slideDown('');
    });
  });