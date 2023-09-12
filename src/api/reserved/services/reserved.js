'use strict';

/**
 * reserved service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reserved.reserved');
