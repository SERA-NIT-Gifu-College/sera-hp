/**
 * Getting Unix time when the API was called. 
 * @module api/getTime
 * @exports defineEventHandler(getTimeEventHandler) */

/**
 * Handler of getTime event
 * @name getTimeEventHandler
 * @param {H3Event<EventHandlerRequest>} event
 * @returns {number} - Unix time
 * @function
 */
const getTimeEventHandler = (event: any) => {
    const now = new Date();
    return now.valueOf();
};

export default defineEventHandler(getTimeEventHandler);
