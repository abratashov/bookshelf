$(function(){
  $('.collapse').collapse();

  $('#Container1').mixItUp({
        layout: {
            display: 'block'
        }
    });

  $('#Container2').mixItUp({
      layout: {
         display: 'block'
      },
      selectors: {
          filter: '.filter1'
      }
    });
});