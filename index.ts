import {
  apply,
  mergeWith,
  move,
  template,
  url,
  Rule,
  SchematicContext,
  Tree
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function componentGenerator(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');

    const sourceParameterizedTemplates = apply(sourceTemplates, [
      template({
        ...strings,
        ...options
      }),
      move(options.path)
    ]);

    return mergeWith(sourceParameterizedTemplates)(tree, _context);
  };
}