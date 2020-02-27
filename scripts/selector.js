// init Isotope
var $grid = $('.grid').isotope({
    itemSelector : '.element-item',
});

var filters = {} ;

// Button click actions
$('#schoolfilter').on('click', 'button', function() {
    var filterValue = $( this ).attr('data-filter') ;
    filterValue = filterValue ;
    $grid.isotope({ filter: filterValue });
}) ;


$('.filters').on( 'click', '.button', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// $('#catfilter').on( 'click', 'button', function() {
//   var filterValue = $( this ).attr('data-filter') ;
//     filterValue =  filterValue ;
//     $grid.isotope({ filter: filterValue }) ;
// });


// // bind sort button click
// $('#namesorts').on( 'click', 'button', function() {
//     var sortByValue = $(this).attr('data-sort-by');
//     $grid.isotope({ sortBy: sortByValue });
// });

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});