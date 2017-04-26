// JQuery
var $ = require('../node_modules/jquery/dist/jquery.min');

var Captions = {
  duration: 300,
  init: function () {
    /**
     * Click Callback
     */
    let toggleContent = function(event) {
      event.preventDefault;
      let $toggle = $(this);
      let $icon = $toggle.html();
      let $caption = $($toggle.closest('.ness-caption'));
      let $content = $($caption.find('.content'));
      $content.slideToggle(this.duration);
      $icon = $icon == '+' ? '-' : '+';
      $toggle.html($icon);
    }
    /* Event Listener */
    $('.toggle-caption').on('click', toggleContent);
  }
}

module.exports = Captions;