
var $ = require('../node_modules/jquery/dist/jquery.min');

/** 
 * Initialization *
 */
function initApp() {
  this.initBars();
  this.initMasks();
  this.initBackgrounds();
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

/**
 * Backgrounds *
 */
function initBackgrounds() {
  let elements = $('[data-bg-url]');
  if (elements.length) {
    let properties;
    for (let element of elements) {
      properties = { background: "url('" + $(element).data('bg-url') + "')" };
      $(element).css(properties);
    }
  }
  elements = $('[data-bg-color]');
  if (elements.length) {
    let properties;
    for (let element of elements) {
      properties = { background: $(element).data('bg-color') };
      $(element).css(properties);
    }
  }
}

var App = {
  init : initApp,
  initBars : initBars,
  initMasks : initMasks,
  initBackgrounds : initBackgrounds,
}

module.exports = App;