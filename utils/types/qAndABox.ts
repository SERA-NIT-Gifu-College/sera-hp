/**
 * Type for QAndABox component
 * @module utils/types/qAndABox
 */

/**
 * Interface that defines property for QAndABox component
 * @property {string} question
 * @example
 * <QAndABox question="Where can I find this Usage?">
 *     <p>Read Your F* Manual.</p>
 * </QAndABox>
 */
interface QAndABoxProperty {
    question: string;
}

export type { QAndABoxProperty };
