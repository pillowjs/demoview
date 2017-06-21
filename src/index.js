/* global define */
'use strict';

;(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    return define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    return factory(exports);
  } else {
    factory(root['demoview'] || (root['demoview'] = {}));
  }
})(this, function(exports) {
  const pkg = require('../package');
  exports.version = pkg.version;
});
