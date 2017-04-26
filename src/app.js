
var $ = require('../node_modules/jquery/dist/jquery.min');
var Captions = require('./captions');
var Backgrounds = require('./backgrounds');
var Bars = require('./bars');
var Masks = require('./masks');
var Menus = require('./menus');

var App = {
  init : function () {
    Captions.init();
    Bars.init();
    Masks.init();
    Menus.init();
    Backgrounds.init();
  }
}

module.exports = App;