// JQuery
var $ = require('../node_modules/jquery/dist/jquery.min');

var Backgrounds = {
  duration: 300,
  init: function () {
    let elements = $('[data-bg-url]');
    if (elements.length) {
      let properties;
      for (let element of elements) {
        if ($(element).data('bg-url')) {
          properties = { background: "url('" + $(element).data('bg-url') + "')" };
          $(element).css(properties);
        }
      }
    }
    elements = $('[data-bg-color]'); // IF data-bg-color exists, it overrides data-bg-url
    if (elements.length) {
      let properties;
      for (let element of elements) {
        if ($(element).data('bg-color')) {
          properties = { background: $(element).data('bg-color') };
          $(element).css(properties);
        }
      }
    }
  }
}

module.exports = Backgrounds;
