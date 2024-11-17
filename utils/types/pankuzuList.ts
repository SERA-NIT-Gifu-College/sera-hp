/**
 * Type for PankuzuList component
 * @module utils/pankuzuList
 */

/**
 * Interface for PankuzuList component property.
 * @property {string=} currentPageName Name of page to show at the end of pankuzu list.
 * @example
 * // /about/about.vue
 * <PankuzuList />
 * @example
 * // /some-dir/some-page.vue
 * <PankuzuList currentPageName="Some Where in the maze" />
 */
interface PankuzuListProperty {
    currentPageName?: string;
}

export type { PankuzuListProperty };
