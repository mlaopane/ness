// JQuery
var $ = require('../node_modules/jquery/dist/jquery.min');

var Masks = {
  duration: 300,
  init: function () {
    let masks = $('.ness-mask');
    if (masks.length) {
      let parent_css = {position: 'relative'};
      let children_css = {zIndex: '2'};
      for (let mask of masks) {
        let parent = $(mask).parent();
        $(parent).css(parent_css);
        $(parent).find('*').not('.ness-mask').css(children_css);
      }
      return masks;
    }
    return null;
  }
}

module.exports = Masks;