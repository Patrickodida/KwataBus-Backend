'use strict';

/**
 * bus-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bus-service.bus-service');
