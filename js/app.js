'use strict';

$( function() {
  $( "#delivery" )
  .selectmenu({
    width: 509
  });

  $( "#payment" )
  .selectmenu({
    width: 509
  });

  $( ".spinner" )
  .spinner({
    icons: { down: "ui-icon-minus", up: " ui-icon-plus" },
    min: 0,
    max: 9
  })

  // $( "fieldset > div:nth-child(3)" ).hide();
  // $( "fieldset > div:nth-child(4)" ).hide();

  // $( ".switch > div" ).on("click", function(e) {
  //   e.preventDefault();
  //   $(".switch > div").removeClass("active");
  //   $( this ).addClass("active");
  //   if($( ".switch > div:last-child" ).hasClass("active")) {
  //     $( "fieldset > div:nth-child(3)" ).show();
  //     $( "fieldset > div:nth-child(4)" ).show();
  //   } else {
  //     $( "fieldset > div:nth-child(3)" ).hide();
  //     $( "fieldset > div:nth-child(4)" ).hide();
  //   };
  // });
});