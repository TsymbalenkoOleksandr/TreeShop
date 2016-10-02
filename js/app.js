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
});
} );