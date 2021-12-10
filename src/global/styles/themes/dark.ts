import { DefaultTheme } from 'styled-components/native';

const dark: DefaultTheme = {
  title: 'dark',

  colors: {
    primary: '#19103fcc',
    
    secondary: '#1c1c31',
    secondary_light: 'rgba(28, 28, 49, 0.3)',

    sucess: '#12A454',
    sucess_light: 'rgba(18, 164, 84, 0.5)',

    attencion: '#E83F5B',
    attencion_light: 'rgba(232, 63, 91, 0.5)',

    shape: '#000000',
    title: '#c5c5c5',
    text: '#f0f0f0',
    text_dark: '#FFFFFF',
    background: '#1f1f1f',
  },

  fonts: {
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    bold: 'Poppins_700Bold'
  }
}

export default dark;