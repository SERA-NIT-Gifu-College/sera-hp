/**
 * Getting Unix time when the API was called.
 * @module api/getTime
 */

/**
 * Handler of getTime event
 * @param {H3Event<EventHandlerRequest>} event
 * @returns {number} Unix time
 */
const getTimeEventHandler = defineEventHandler((event: any) => {
    const now = new Date();
    return now.valueOf();
});

export default getTimeEventHandler;
