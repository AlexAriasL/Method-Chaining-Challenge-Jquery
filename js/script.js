// Method chaining using mouseenter and mouseleave
$(document).ready(function() {
   $("button") .mouseenter(function() {
      $(this).removeClass("makeRed") .addClass ("makeBorder");
      });

      $("button") .mouseleave(function() {
         $(this).removeClass("makeBorder") .addClass("makeRed");
         });

         $("button") .on(function() {
            $(this).removeClass("makeBorder") .addClass("makeRed");
            });
   
   }); 