
var $ = require('../node_modules/jquery/dist/jquery.min');

var Events = {  
  duration: 300,
  init: function() {
    this.initCaptions();
  },
  initCaptions: function() {
    /**
     * Click Callback
     */
    let toggleContent = function(event) {
      $toggle = $(this);
      $icon = $toggle.html();
      $caption = $($toggle.closest('.ness-caption'));
      $content = $($caption.find('.content'));
      $content.slideToggle(this.duration);
      $icon = $icon == '+' ? '-' : '+';
      $toggle.html($icon);
    }
    // Event Listener
    $('.toggle-caption').on('click', toggleContent);
  },
};

module.exports = Events;
