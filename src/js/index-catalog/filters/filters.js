$(function () {
  $('#slider-range').slider({
    range: true,
    min: 0,
    max: 750,
    values: [100, 500],
    slide: function (event, ui) {
      $('#amount').val(ui.values[0] + ' UAH. - ' + ui.values[1] + ' UAH.');
    },
  });
  $('#amount').val(
    $('#slider-range').slider('values', 0) + ' UAH. - ' + $('#slider-range').slider('values', 1) + ' UAH.'
  );
});
