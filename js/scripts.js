
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

$(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('').hide('');
      $("#product").show('');
    });
    $("#product").click(function(){
      $("#product").slideUp('');
      $("#product-image").slideDown('');
    });
  });

$(document).ready(function(){
    $("#first").mouseover(function(){
      $("#tile1").show();
    }).mouseout(function(){
      $("#tile1").hide();
    });
  });  