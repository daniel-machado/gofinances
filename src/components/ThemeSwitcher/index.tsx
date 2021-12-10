import { registerRootComponent } from 'expo';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { Switch } from "react-native";
import { shade, lighten } from 'polished';
import { Container } from './styles';
import { useTheme } from '../../hook/theme';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
         onChange={toggleTheme}
         trackColor={{
           false: shade(0.4, colors.background),
           true: lighten(0.3, colors.background)
         }}
         ios_backgroundColor="#3e3e3e"
         value={theme.title === 'dark'}
         //height={10}
         //width={40}
         //handleDiameter={20}
        //onChange={toggleTheme}
        //checked={theme.title === 'dark'}
        //checkedIcon={false}
        //uncheckedIcon={false}
        //height={10}
        //width={40}
        //handleDiameter={20}
        //offColor={shade(0.4, colors.background)}
        //onColor={lighten(0.3, colors.background)}
      />
    </Container>
  );
};
registerRootComponent(ThemeSwitcher);
export default ThemeSwitcher;
