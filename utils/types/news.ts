/**
 * Types for news data
 * @module utils/types/news
 */

/**
 * Enumeration for news entry type of either article or tweet style
 * @readonly
 * @enum {number}
 */
const enum EntryType {
    Article,
    Tweet,
}

/**
 * Interface for article information
 * @typedef {object} ArticleInfo
 * @property {number | null} date Unix time of article creation
 * @property {string | null} article content of article itself
 * @property {string | null} linkPath path to the article
 * @property {string | null} coverImagePath Path to the cover image
 */
interface ArticleInfo {
    date: number | null;
    cardContent: string | null;
    article: string | null;
    linkPath: string | null;
    coverImagePath: string | null;
}

/**
 * Interface for news
 * @typedef {object} NewsEntry
 * @property {number | null} date Unix time of creation
 * @property {EntryType | null} entryType Type of news
 * @property {string | null} cardContent Content displayed on card
 * @property {string | null} linkPath Link path to the article
 * @property {string | null} coverImagePath Path to the cover image
 */
interface NewsEntry {
    date: number | null;
    entryType: EntryType | null;
    cardContent: string | null;
    linkPath: string | null;
    coverImagePath: string | null;
}

export type { ArticleInfo, NewsEntry };
export { EntryType };
