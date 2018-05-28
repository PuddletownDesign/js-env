/**
 * Function to convert a string to a cleanURL. Strips out all non letters and numbers and converts spaces to hyphens
 *
 * @param {string} - title
 * @return {string} - url
 */

module.exports = function cleanURL (title) {
  return title
    /* Removes multiple spaces */
    .replace(/ +/g, ' ')

    /* replaces all non letter or number characters */
    .replace(/[^A-Za-z0-9 ]/g, '')

    /* Converts spaces into hyphens */
    .split(' ').join('-')

    /* Converts string to lowercase */
    .toLowerCase()
}
