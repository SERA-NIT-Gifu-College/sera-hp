/**
 * @module utils/tableWrapper
 */

/**
 * Wrap object array into HTML table body tr+td's
 * @param {Object[]} target - array of objects
 * @returns {string} Stringed HTML table body tr+td's
 * @example
 * const data = [
 *     {id: 1, name: "John"},
 *     {id: 2, name: "Marry"},
 * ];
 * const responseHTML = wrapInTable(data);
 * // responseHTML =
 * // <tr>
 * //     <td>1</td>
 * //     <td>John</td>
 * // </tr>
 * // <tr>
 * //     <td>2</td>
 * //     <td>Marry</td>
 * // </tr>
 */
const wrapInTable = (target) => {
    let res = "";
    for (const entry of target) {
        let tableData = "<tr>\n";
        for (const data in entry) {
            let dataEntry = `    <td>${entry[data]}</td>\n`
            tableData = tableData + dataEntry;
        }
        tableData = tableData + "</tr>\n";
        res = res + tableData;
    }
    return res;
};

export { wrapInTable };
