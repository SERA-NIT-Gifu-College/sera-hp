/**
 * Type for gallery image entry data
 * @module utils/types/galleryEntry
 */

/**
 * Interface for gallery image entry
 * @property {number} id id from database
 * @property {string} imagePath image URL
 * @property {string} caption caption of the image
 */
interface GalleryEntry {
    id: number;
    imagePath: string;
    caption: string;
}

export type { GalleryEntry };
