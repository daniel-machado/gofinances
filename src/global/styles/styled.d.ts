/*import 'styled-components';

import dark from './themes';
import light from './themes';
declare module 'styled-components' {
  type ThemeType = typeof dark
  type ThemeType = typeof light

  export interface DefaultTheme extends ThemeType { }
}*/  
import 'styled-components/native';
declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      secondary_light: string;
  
      sucess: string;
      sucess_light: string;
  
      attencion: string;
      attencion_light: string;
  
      shape: string;
      title: string;
      text: string;
      text_dark: string;
      background: string;
    };

    fonts: {
      regular: string;
      medium: string;
      bold: string;
    };
  }
}


