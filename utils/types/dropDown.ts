/**
 * Types for DropDown component
 * @module utils/types/dropDown
 */

/**
 * Enum for interaction mode of DropDown component
 * @readonly
 * @enum {string}
 */
export const enum DropDownMode {
    onMouseHover = "mousehover",
    onClick = "click",
}

/**
 * Enum for alignment of DropDown component
 * @readonly
 * @enum {number}
 */
export const enum DropDownAlignment {
    Left,
    Right,
}

/**
 * Interface for the entry of DropDown menu
 * @typedef {object} DropDownEntry
 * @property {string} text Text to be displayed on the menu
 * @property {string} link Hyperlink to the page
 * @example
 * const menuEntries: Array<DropDownEntry> = [
 *     { text: "Home", link: "/" },
 *     { text: "About", link: "/about" },
 *     { text: "Blog", link: "/blog" },
 * ];
 */
interface DropDownEntry {
    text: string;
    link: string;
}

/**
 * Interface for the property of DropDown component
 * @typedef {object} DropDownProperty
 * @property {string} label Label of the component
 * @property {(DropDownMode | string)} mode Interaction mode of the component
 * @property {Array<DropDownEntry>} entries Entries of DropDown menu
 * @property {(DropDownAlignment | number)=} alignment Explicitly assign the alignment of the component
 * @example
 * <DropDown label="Menu" :mode="DropDownMode.onClick" :alignment="DropDownAlignment.Left" :entries="menuEntries" />
 */
interface DropDownProperty {
    label: string;
    mode: DropDownMode | string;
    entries: Array<DropDownEntry>;
    alignment?: DropDownAlignment | number;
}

export type { DropDownProperty, DropDownEntry };
