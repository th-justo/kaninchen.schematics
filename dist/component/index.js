"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentGenerator = componentGenerator;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function renameTemplates(targetPath) {
    return (tree) => {
        tree.visit(filePath => {
            if (filePath.startsWith(targetPath) && filePath.endsWith('.template')) {
                const newPath = filePath.replace('.template', '.ts'); // já vira .ts
                tree.rename(filePath, newPath);
            }
        });
        return tree;
    };
}
function componentGenerator(options) {
    const targetPath = options.path || 'src/app/components';
    const sourceTemplates = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
        (0, schematics_1.template)({ ...options, ...core_1.strings }),
        (0, schematics_1.move)(targetPath)
    ]);
    return (0, schematics_1.chain)([
        (0, schematics_1.mergeWith)(sourceTemplates),
        renameTemplates(targetPath)
    ]);
}
