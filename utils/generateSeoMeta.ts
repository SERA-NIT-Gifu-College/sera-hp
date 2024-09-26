/**
 * Helper function to generate object for useSeoMeta composable
 * @module utils/generateSeoMeta
 */

import type { UseSeoMetaInput } from "@unhead/schema";

/**
 * Generate object for useSeoMeta composable
 * @typedef {"website" | "article"} ContentType
 * @param {string} title Title of the page
 * @param {string} description description of the page
 * @param {string} imagePath path to image for SNS card, root is at public/
 * @param {ContentType} [type] Type of website, either website or article, defaults to website if not passed
 * @returns {UseSeoMetaInput} object that can be passed to useSeoMeta composable
 * @example
 * useSeoMeta(
 *     generateSeoMeta(
 *         "Home",
 *         "Home page for my website",
 *         "/default_card_image.png"
 *     )
 * );
 * @example
 * useSeoMeta(generateSeoMeta(data.articleName, data.articleDescription, data.articleCoverImage, "article"));
 * @function
 */
export function generateSeoMeta(
    title: string,
    description: string,
    imagePath: string,
    type?: "website" | "article"
): UseSeoMetaInput {
    return {
        title: title,
        ogTitle: title + " - 岐阜高専宇宙工学研究会",
        twitterTitle: title + " - 岐阜高専宇宙工学研究会",
        description: description,
        ogDescription: description,
        twitterDescription: description,
        ogImage: imagePath,
        twitterImage: imagePath,
        twitterCard: "summary",
        charset: "utf-8",
        ogLocale: "ja_JP",
        ogType: type || "website",
    };
}
