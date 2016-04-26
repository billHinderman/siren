var bg = (function() {
  var run = function() {
    var $bg = $('[data-bg]');
    if($bg.length) {
      $bg.each(function() {
        $(this).css('background-image','url("'+($(this).data('bg'))+'")');
      });
    }
  };

  return {
    'run': function() {
      run();
      return true;
    }
  };
})();

$(function() {
  bg.run();
});
