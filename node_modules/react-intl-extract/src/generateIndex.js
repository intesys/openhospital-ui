const template = require('./templates/index');
const { join } = require("path");
const { writeFileSync } = require('fs');

module.exports = (locales, output) => {
  const content = template(locales);
  const target = join(output, 'index.ts');
  writeFileSync(target, content);
}
