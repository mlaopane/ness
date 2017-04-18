
var $ = require('../node_modules/jquery/dist/jquery.min');

/** 
 * Initialization *
 */
function initApp()
{
  initBars();
  initMasks();
}

/** 
 * Progression bars *
 */
function initBars() {
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

/**
 * Masks *
 */
function initMasks() {
  let masks = $('.ness-mask');
  console.log(masks.length);
  if (masks.length)
  {
    let parent_css = {position: 'relative'};
    let children_css = {zIndex: '2'};
    for (let mask of masks)
    {
      let parent = $(mask).parent();
      $(parent).css(parent_css);
      $(parent).find('*').not('.ness-mask').css(children_css);
    }
  }
}

var App = {
  init : initApp,
  initBars : initBars,
  initMasks : initMasks,
}

module.exports = App;