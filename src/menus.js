// JQuery
var $ = require('../node_modules/jquery/dist/jquery.min');

var Menus = {
  duration: 300,
  init: function () {
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
      event.stopPropagation();
      let $this = $(this);
      let $menu = $this.closest('.has-dropdown');
      if ( !$menu.length ) {
        return false;
      }
      let id_dropdown = $this.data('toggle');
      let $dropdown = $($this.parent().find(id_dropdown));
      updateChevron($menu, $this);
      $dropdown.slideToggle(this.duration, function() { });
    }

    /* Event Listener */
    $('.toggle-dropdown').on('click', toggleMenu);

    /* Toggle Dropdown init */
    let $chevron_right = $('<span>', { class: 'fa fa-chevron-right' });
    if ( $('.toggle-dropdown').children('a').length )
      $('.toggle-dropdown').children('a').append($chevron_right);
    else
      $('.toggle-dropdown').append($chevron_right);
  }
}

module.exports = Menus;