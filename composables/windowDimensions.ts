/**
 * Vue Composable for getting window dimensions
 * @module composables/windowDimensions
 */

const largeTabletMaxWidth = 1024;
const mediumTabletMaxWidth = 960;
const mobileMaxWidth = 640;

/**
 * Enums for viewport types
 * @readonly
 * @enum {number}
 */
const enum ViewPortType {
    DESKTOP,
    LARGE_TABLET,
    MEDIUM_TABLET,
    MOBILE,
}

/**
 * Enums for viewport orientation
 * @readonly
 * @enum {number}
 */
const enum ViewPortOrientation {
    LANDSCAPE,
    PORTRAIT,
}

/**
 * Vue Composable for getting window dimensions and viewport type based on width
 * @returns {object} returns the references of width, height, and viewport type
 */
function useWindowDimensions() {
    const width = ref<number>(0);
    const height = ref<number>(0);
    const viewPortType = ref<ViewPortType>(ViewPortType.DESKTOP);
    const viewPortOrientation = ref<ViewPortOrientation>(
        ViewPortOrientation.LANDSCAPE
    );

    function update() {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
        viewPortOrientation.value = (width.value <
            height.value) as unknown as number;
        if (width.value > largeTabletMaxWidth) {
            viewPortType.value = ViewPortType.DESKTOP;
        } else if (width.value > mediumTabletMaxWidth) {
            viewPortType.value = ViewPortType.LARGE_TABLET;
        } else if (width.value > mobileMaxWidth) {
            viewPortType.value = ViewPortType.MEDIUM_TABLET;
        } else {
            viewPortType.value = ViewPortType.MOBILE;
        }
    }

    onMounted(() => {
        update();
        window.addEventListener("resize", update);
    });

    onUnmounted(() => window.removeEventListener("resize", update));

    return { width, height, viewPortType, viewPortOrientation };
}

export { useWindowDimensions, ViewPortType, ViewPortOrientation };
