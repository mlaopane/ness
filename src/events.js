
var $ = require('../node_modules/jquery/dist/jquery.min');

var Events = {  
  duration: 300,
  init: function() {
    this.initCaptions();
    this.initMenus();
  },
  initCaptions: function() {
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
    // Event Listener
    $('.toggle-caption').on('click', toggleContent);
  },
  initCaptions: function() {
    /**
     * Click Callback
     */
    let toggleContent = function(event) {
      event.preventDefault;
      let $this = $(this);
      let id_menu = $this.data('toggle');
      let $menu = $($this.parent().find(id_menu));
      $menu.slideToggle(300, function() { });
    }
    // Event Listener
    $('.toggle-caption').on('click', toggleContent);
  },
  /*** Menu ***/
function toggleMenu(event) {
  
}

$(document).ready(function() {
  $('.toggle-dropdown').on('click', toggleMenu);
});
};

module.exports = Events;
