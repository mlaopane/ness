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
    let toggleDropdown = function(event, $el = null) {
      event.stopPropagation();
      let $this = $el == null ? $(this) : $el;
      let $menu = $this.closest('.has-dropdown');
      if ( !$menu.length ) {
        return false;
      }
      let id_dropdown = $this.data('toggle');
      let $dropdown = $($this.parent().find(id_dropdown));
      updateChevron($menu, $this);
      $dropdown.slideToggle(this.duration, function() { });
    }
    /**
     * 
     * @param {object} event 
     */
    let toggleBurger = function(event) {
      event.stopPropagation();
      let $this = $(this);
      let $burger = $($this.data('toggle'));
      if ( !$burger.length ) {
        return false;
      }
      dropdowns = $this.closest('.has-burger').find('.dropdown-content');
      for ( let i = 0 ; i < dropdowns.length ; i++ ) {
        $dropdown = $(dropdowns[i]);
        dropdown_toggled = $dropdown.css('display') != 'none' || $dropdown.css('display') == 'block' ;
        if ( $dropdown.length && dropdown_toggled ) {
          $toggle_dropdown = $($this.closest('.has-burger').find('.toggle-dropdown'))
          toggleDropdown(event, $toggle_dropdown);
        }
      }
      $burger.slideToggle(this.duration, function() { });
    }

    /* Event Listeners */
    $('.toggle-dropdown').on('click', toggleDropdown);
    $('.toggle-burger').on('click', toggleBurger);

    /* Toggle Dropdown init */
    let $chevron_right = $('<span>', { class: 'fa fa-chevron-right' });
    if ( $('.toggle-dropdown').children('a').length )
      $('.toggle-dropdown').children('a').append($chevron_right);
    else
      $('.toggle-dropdown').append($chevron_right);
  }
}

module.exports = Menus;