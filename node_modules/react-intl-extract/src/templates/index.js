
/**
 * @param {string} locale 
 * @returns {string}
 */
const _import = (locale) => (`import ${locale} from './${locale}.json';`);

/**
 * @param {string[]} locales
 * @returns {string}
 */
const _export = (locales) => (`
export default {
  ${locales.join(',\n  ')}
}
`);

/**
 * Dynamically composed js code for `locales/index.ts`
 * 
 * @param {string[]} locales
 * @returns {string}
 */
module.exports = (locales) => {
  const imports = locales.map(locale => _import(locale)).join('\n');
  const exports = _export(locales);
  return `${imports}\n${exports}`;
}
