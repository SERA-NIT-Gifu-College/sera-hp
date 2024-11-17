/**
 * Types for Slide component
 * @module utils/types/slide.ts
 */

/**
 * Entries to show in the slide show
 * @property {string} imagePath path to the image
 * @property {string} title text to show in the h1 element
 * @property {string} content text to show in the p element
 * @property {string=} link optional link to a page
 * @example
 * let entry: SlideEntry = {
 *     imagePath: "/images/slide/1.jpg",
 *     title: "First Slide",
 *     content: "This is first slide",
 *     link: "/to-some-page",
 * };
 */
interface SlideEntry {
    imagePath: string;
    title: string;
    content: string;
    link?: string;
}

/**
 * Interface for Slide component
 * @property {Array<SlideEntry>} entries slides to show
 * @property {number} duration duration for each slide to show in milliseconds
 * @property {string} width css width property value
 * @property {string} height css height property value
 * @example
 * <Slide :entries="slideEntries" duration="5000" width="200px" height="150px" />
 */
interface SlideProperty {
    entries: Array<SlideEntry>;
    duration: number;
    width: string;
    height: string;
}

export type { SlideEntry, SlideProperty };
