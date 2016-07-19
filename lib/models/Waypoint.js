'use strict';

var uuid = require('uuid').v4;

module.exports = function Waypoint (data) {
  return Object.assign({
    id: uuid(),
    navItem: null,
    lat: null,
    lon: null,
    elevation: null,
    index: null,
    flightPlanId: null
  }, data);
};