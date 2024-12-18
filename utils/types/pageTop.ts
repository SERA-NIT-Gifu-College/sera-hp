/**
 * Type for PageTop component
 * @module utils/types/pageTop
 */

/**
 * Interface that defines property for PageTop component
 * @property {string} text Text to show in top
 * @property {string} imagePath Path to image used in background
 * @example
 * <PageTop text="News" image-path="/images/news-top.jpg" />
 */
interface PageTopProperty {
    text: string;
    imagePath: string;
}

export type { PageTopProperty };
