/**
 * Vue Composable for getting scroll distance
 * @module composables/scrollDistance
 */

/**
 * Vue Composable for getting scroll distance of client
 * @returns {globalThis.Ref<number, number>} reference to the scroll distance value
 */
function useScrollDistance() {
    const scrollDistance = ref<number>(0);

    function update() {
        if (import.meta.client) {
            scrollDistance.value = window.scrollY;
        }
    }

    onMounted(() => {
        update();
        window.addEventListener("scroll", update);
    });

    onUnmounted(() => window.removeEventListener("scroll", update));

    return scrollDistance;
}

export { useScrollDistance };
