/**
 * Type for NewsCard component
 * @module utils/types/newsCard
 */

import type { NewsEntry } from "./news";

/**
 * Interface that defines property for NewsCard component
 * @property {NewsEntry} newsEntry Data of news
 * @property {boolean} isNew Mark the entry new
 * @example
 * <NewsCard :news-entry="articleData" :is-new="isFirstElement(articleData)" />
 */
interface NewsCardProperty {
    newsEntry: NewsEntry;
    isNew: boolean;
}

export type { NewsCardProperty };
