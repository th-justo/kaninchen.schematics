import { apply, mergeWith, move, Rule, SchematicContext, template, Tree, url, chain } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';

function renameTemplates(targetPath: string): Rule {
  return (tree: Tree) => {
    tree.visit(filePath => {
      if (filePath.startsWith(targetPath) && filePath.endsWith('.template')) {
        const newPath = filePath.replace('.template', '.ts'); // já vira .ts
        tree.rename(filePath, newPath);
      }
    });
    return tree;
  };
}

export function componentGenerator(options: Schema): Rule {
  const targetPath = options.path || 'src/app/components';

  const sourceTemplates = apply(url('./files'), [
    template({ ...options, ...strings }),
    move(targetPath)
  ]);

  return chain([
    mergeWith(sourceTemplates),
    renameTemplates(targetPath)
  ]);
}