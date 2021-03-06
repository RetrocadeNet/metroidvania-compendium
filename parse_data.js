var util = require('util');
var packageJson = require('./package.json');
var console = require("./src/console");

console.title(util.format('METROIDVANIA ABILITY COMPENDIUM PARSER V.%s', packageJson.version));

require('./src/parser/PlatformParser').run();
require('./src/parser/SeriesParser').run();
require('./src/parser/CategoryParser').run();
require('./src/parser/AbilityParser').run();
require('./src/parser/GameParser').run();
require('./src/parser/ChangelogParser').run();
require('./src/parser/CreditsParser').run();
require('./src/templater/html/HtmlGenerator').run();