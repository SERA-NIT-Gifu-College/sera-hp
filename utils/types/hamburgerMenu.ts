/**
 * Type for HamburgerMenu component
 * @module utils/hamburgerMenu
 */

import type { DropDownEntry } from "./dropDown";

/**
 * Interface for HamburgerMenu component properties
 * @property {Array<DropDownEntry>} entries Array of {@link DropDownEntry} objects representing the menu items in the hamburger menu.
 * @example
 * <HamburgerMenu :entries="menuEntries" />
 */
interface HamburgerMenuProperty {
    entries: Array<DropDownEntry>;
}

export type { HamburgerMenuProperty };
