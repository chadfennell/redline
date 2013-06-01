$('.xtend').annotator()
  .annotator('addPlugin', 'Vote');


$( document ).ready(function() {
  // Jank hack to make checkboxes behave like radios b/c radios
  // are not yet implemented in annotator
  $('#annotator-field-2').click(function() {
    $('#annotator-field-1').attr('checked', false);
  });
  $('#annotator-field-1').click(function() {
    $('#annotator-field-2').attr('checked', false);
  });
});
