/**
 * Vue Composable for optimizing image used in background-image.
 * @module composables/backgroundImageOptimization
 */

/**
 * Vue Composable for optimizing background-image with Nuxt Image
 * @returns { WritableComputedRef<{ backgroundImage: string}, string>} writable computed value that will return the Vue style object with optimized image URL
 */
function useBackgroundImageOptimization() {
    const targetImage = ref("");

    const img = useImage();
    const backgroundImageStyles = computed({
        get: () => {
            const imageURL = img(targetImage.value, {
                format: "webp",
                quality: 80,
            });
            return { backgroundImage: `url("${imageURL}")` };
        },
        set: (value: string) => {
            targetImage.value = value;
        },
    });

    return { backgroundImageStyles };
}

export { useBackgroundImageOptimization };
