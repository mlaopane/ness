// JQuery
var $ = require('../node_modules/jquery/dist/jquery.min');

var Masks = {
  duration: 300,
  init: function () {
    let masks = $('.ness-mask');
    if (masks.length) {
      for (let mask of masks) {
        opacity_value = $(mask).data('opacity') > 0 ? $(mask).data('opacity') : '0.8';
        let parent_css = {position: 'relative'};
        let mask_css = {opacity: opacity_value};
        let children_css = {zIndex: '2'};
        let parent = $(mask).parent();
        $(parent).css(parent_css);
        $(mask).css(mask_css);
        $(parent).find('*').not('.ness-mask').css(children_css);
      }
    }
    return this;
  },
}

module.exports = Masks;
