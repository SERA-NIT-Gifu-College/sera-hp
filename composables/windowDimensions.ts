/**
 * Vue Composable for getting window dimensions
 * @module composables/windowDimensions
 */

/**
 * Enums for viewport types
 * @enum {number}
 */
export const enum ViewPortType {
    DESKTOP,
    TABLET,
    MOBILE
};

/**
 * Vue Composable for getting window dimensions and viewport type based on width
 * @returns {object} returns the references of width, height, and viewport type
 */
export function useWindowDimensions() {
    const width = ref<number>(0);
    const height = ref<number>(0);
    const viewPortType = ref<ViewPortType>(ViewPortType.DESKTOP);

    function update(event: Event | undefined) {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
        if (width.value >= 1024) {
            viewPortType.value = ViewPortType.DESKTOP;
        }
        else if (width.value < 640) {
            viewPortType.value = ViewPortType.MOBILE;
        }
        else {
            viewPortType.value = ViewPortType.TABLET;
        }
    }

    onMounted(() => {
        update(undefined);
        window.addEventListener("resize", update);
    });

    onUnmounted(() => window.removeEventListener("resize", update));

    return { width, height, viewPortType };
}
