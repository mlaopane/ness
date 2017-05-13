
var $ = require('../node_modules/jquery/dist/jquery.min');
var Captions = require('./captions');
var Backgrounds = require('./backgrounds');
var Bars = require('./bars');
var Forms = require('./menus');
var Masks = require('./masks');
var Menus = require('./menus');

var App = {
  init : function () {
    Captions.init();
    Backgrounds.init();
    Bars.init();
    Forms.init();
    Masks.init();
    Menus.init();
  }
}

module.exports = App;