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
    const titleComposer = (title: string): string => {
        return title + " - 岐阜高専宇宙工学研究会";
    };

    const descriptionComposer = (description: string): string => {
        return (
            description +
            " - 岐阜高専宇宙工学研究会【SERA】公式ホームページです。航空や宇宙に興味がある学生が所属しており、モデルロケットや缶サット製作などを中心に宇宙に関する知識を高めるために活動しています。"
        );
    };

    return {
        title: title,
        ogTitle: titleComposer(title),
        twitterTitle: titleComposer(title),
        description: descriptionComposer(description),
        ogDescription: descriptionComposer(description),
        twitterDescription: descriptionComposer(description),
        ogImage: imagePath,
        twitterImage: imagePath,
        twitterCard: "summary",
        twitterSite: "@SERA_NITGC",
        charset: "utf-8",
        ogLocale: "ja_JP",
        ogType: type || "website",
        articleTag: [
            "宇宙工学研究会",
            "SERA",
            "岐阜高専",
            "岐阜工業高等専門学校",
            "クラブ活動",
            "部活動",
            "同好会",
            "宇宙",
            "研究会",
        ],
    };
}
