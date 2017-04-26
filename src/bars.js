// JQuery
var $ = require('../node_modules/jquery/dist/jquery.min');

var Bars = {
  duration: 300,
  init: function () {
    let ness_bars = $('.ness-bar');
    if (ness_bars.length)
    {
      for (let ness_bar of ness_bars) {
        let $progress = $('<div>', { class: 'ness-progress' });
        $progress.width($(ness_bar).data('ness-bar')).appendTo($(ness_bar));
      }
      return ness_bars;
    }
    return null;
  }
}

module.exports = Bars