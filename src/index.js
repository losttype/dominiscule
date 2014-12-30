// MIT from http://git.io/fMyd0w

/**
* @module API
*/

import { extend } from 'domtastic/commonjs/util';

var api = {},
$ = {};

// Import modules to build up the API

import * as array from 'domtastic/commonjs/array';
import * as attr from 'domtastic/commonjs/attr';
import * as class_ from 'domtastic/commonjs/class';
// import * as contains from 'domtastic/commonjs/contains';
import * as css from 'domtastic/commonjs/css';
// import * as data from 'domtastic/commonjs/data';
import * as dom from 'domtastic/commonjs/dom';
import * as dom_extra from 'domtastic/commonjs/dom_extra';
import * as event from 'domtastic/commonjs/event';
// import * as html from 'domtastic/commonjs/html';
// import * as noconflict from 'domtastic/commonjs/noconflict';
// import * as ready from 'domtastic/commonjs/ready';
import * as selector from 'domtastic/commonjs/selector';
// import * as selector_extra from 'domtastic/commonjs/selector_extra';
// import * as trigger from 'domtastic/commonjs/trigger';
// import * as type from 'domtastic/commonjs/type';

if (typeof selector !== 'undefined') {
  $ = selector.$;
  $.matches = selector.matches;
  api.find = selector.find;
  api.closest = selector.closest;
}

extend($, contains, noconflict, type);
extend(api, array, attr, class_, css, data, dom, dom_extra, event, html, ready, selector_extra, trigger);

$.fn = api;

// Version

$.version = '__VERSION__';

// Util

$.extend = extend;

// Export interface

export default $;
