
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
    /* Event Listener */
    $('.toggle-caption').on('click', toggleContent);
  },
  initMenus: function() {
    /**
     * 
     * @param {jQuery} $menu 
     * @param {jQuery} $toggle 
     */
    let updateChevron = function ($menu, $toggle) {
      let $chevron = $( $toggle.find('.fa'));
      if ( $menu.length && $chevron.length ) {
        $chevron.toggleClass('fa-chevron-right').toggleClass('fa-chevron-down');
      }
    }
    /**
     * 
     * @param {object} event 
     */
    let toggleMenu = function(event) {
      event.preventDefault;
      let $this = $(this);
      let id_menu = $this.data('toggle');
      let $menu = $($this.parent().find(id_menu));
      updateChevron($menu, $this);
      $menu.slideToggle(300, function() { });
    }
    /* Event Listener */
    $('.toggle-dropdown').on('click', toggleMenu);

    // Toggle Dropdown init
    let $chevron_right = $('<span>', { class: 'fa fa-chevron-right' })
    $('.toggle-dropdown').append($chevron_right);
  },
};

module.exports = Events;
