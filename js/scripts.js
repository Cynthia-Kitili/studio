
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
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
  });  
  $(document).ready(function(){
    $("#second").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });   
  $(document).ready(function(){
    $("#third").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });   
  
  $(document).ready(function(){
    $("#fourth").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });  
  $(document).ready(function(){
    $("#fifth").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
  });    
  $(document).ready(function(){
    $("#sixth").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
  });   
  $(document).ready(function(){
    $("#seventh").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
  });  
  $(document).ready(function(){
    $("#eigth").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });  

$(document).ready(function(){
    $("form").submit(function(event){
        var name=$("input#text").val();
        var email=$("input#email").val();
        var message=$("textarea#comment").val();
        if ($("input#text").val() && $("input#email").val() && $("textarea#comment").val()){
            alert("Hello"  + ""+name +"" + ",we have received your message "+ ""+ (message) +""+ ".Thank you for reaching out to us. We will contact you through the email address you have provided." +"" + email);
        }
        else {
            alert("Please make sure you fill in all the details before submitting the form.");
        }
    })
})