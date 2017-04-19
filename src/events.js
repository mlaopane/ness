/*** Caption ***/

function initEvents()
{
  initCaptions();
}

function initCaptions()
{
  $('.toggle-caption').on('click', toggleContent);
  function toggleContent(event)
  {
    $toggle = $(this);
    $caption = $($this.closest('.ness-caption'));
    $title = $($caption.find('.title'));
    $content = $($caption.find('.content'));
    $caption.toggleClass('hide');
  }
}

var Events = {
  init: initEvents,
  initCaptions: initCaptions,
}

module.export = Events;