'use strict';

/**
 * --------------------------------------------------------------------
 * jQuery compatibility layer
 * --------------------------------------------------------------------
 */
window.$ = document.querySelectorAll.bind(document);
Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};
NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  [].forEach.call(this, function (el, i) {
	el.on(name, fn);
  });
};

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, argument) {
        argument = argument || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(argument, this[i], i, this);
        }
    };
}

class Application {
  constructor () {
    console.log("Booting application");
  }

  _cacheDOM () {
  }

  _setEventListeners () {
  }

}
new Application();
