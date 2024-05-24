'use strict';

/**
 * bus-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bus-service.bus-service');
