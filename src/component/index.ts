import {
  apply,
  applyTemplates,
  chain,
  mergeWith,
  move,
  Rule,
  url
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';

/**
 * Generator do componente
 */
export function componentGenerator(options: Schema): Rule {
  const targetPath = options.path || 'src/app/components';
  const folderPath = `${targetPath}/${strings.dasherize(options.name)}`;

  const sourceTemplates = apply(url('./files'), [
    applyTemplates({
      ...options,
      ...strings,
    }),
    move(folderPath),
  ]);

  return chain([
    mergeWith(sourceTemplates),
  ]);
}