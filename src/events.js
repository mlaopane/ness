/*** Caption ***/

var Events = {
  duration: 300,
  /**
   *
   */
  init: function() {
    this.initCaptions();
  },
  /**
   *
   */
  initCaptions: function() {
    $('.toggle-caption').on('click', toggleContent);
    /**
     *
     * Click Callback
     */
    function toggleContent(event) {
      $toggle = $(this);
      $icon = $toggle.html();
      $caption = $($toggle.closest('.ness-caption'));
      $content = $($caption.find('.content'));
      $content.slideToggle(this.duration);
      $icon = $icon == '+' ? '-' : '+';
      $toggle.html($icon);
    }
  }
}

module.export = Events;
