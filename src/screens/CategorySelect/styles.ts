import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import Styled from 'styled-components/native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
interface CategoryProps { 
  isActive: boolean;
}


export const Container = Styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Header = Styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${props => props.theme.colors.primary};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;

`;

export const Title = Styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const Category = Styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;
  
  color: ${props => props.theme.colors.shape};
  background-color: ${({ isActive, theme}) => 
    isActive ? theme.colors.secondary_light :  theme.colors.background
  };
`;

export const Icon = Styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = Styled.Text`
  font-family: ${props => props.theme.fonts.regular}
  font-size: ${RFValue(14)}px;
`;

export const Separator = Styled.View`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.colors.text};
`;

export const Footer = Styled.View`
  width: 100%;
  padding: 24px;
`;
