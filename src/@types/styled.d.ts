import 'styled-components';
import theme from '../theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType { }
}

// instalar o styled mais estável no momento npm i styled-components@5.3.9