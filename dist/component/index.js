"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentGenerator = componentGenerator;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
/**
 * Generator do componente
 */
function componentGenerator(options) {
    const targetPath = options.path || 'src/app/components';
    const folderPath = `${targetPath}/${core_1.strings.dasherize(options.name)}`;
    const sourceTemplates = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
        (0, schematics_1.applyTemplates)({
            ...options,
            ...core_1.strings,
        }),
        (0, schematics_1.move)(folderPath),
    ]);
    return (0, schematics_1.chain)([
        (0, schematics_1.mergeWith)(sourceTemplates),
    ]);
}
