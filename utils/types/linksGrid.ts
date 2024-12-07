/**
 * Types for LinksGrid component
 * @module utils/types/linksGrid
 */

import type { LinkCardProperty } from "./linkCard";

/**
 * Interface that defines property for LinksGrid component
 * @property {Array<LinkCardProperty>} links Array of property of LinkCard components
 * @example
 * const linksList = [
 *     {
 *         title: "test 1",
 *         description: "Test Page #1",
 *         link: "/test/1",
 *         imagePath: "/images/test-1.png",
 *     },
 *     ...
 *     {
 *         title: "test n",
 *         description: "Test Page #n",
 *         link: "/test/n",
 *         imagePath: "/images/test-n.png",
 *     },
 * ];
 * <LinksGrid :links="linksList" />
 */
interface LinksGridProperty {
    links: Array<LinkCardProperty>;
}

export type { LinksGridProperty };
