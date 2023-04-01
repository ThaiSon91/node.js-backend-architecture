"use strict";

const _ = require("lodash");

const getInfoData = ({ fileds = [], object = {} }) => {
  return_.pick(object, fileds);
};

module.exports = { getInfoData };
