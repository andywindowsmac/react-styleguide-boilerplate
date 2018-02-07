// styled-components.ts
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import colorsMap from './colorsMap';
import { ThemeColorMap, ThemingInterface } from './types';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemingInterface>;

export { colorsMap, ThemeColorMap, ThemingInterface };
export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;