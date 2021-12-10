import Styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = Styled(RectButton).attrs({
  activeOpacity: 0.7
})`
  background-color: ${props => props.theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  padding: 18px 16px;
`;

export const Category = Styled.Text`
  font-family: ${props => props.theme.fonts.regular };
  font-size: ${RFValue(14)}px;
`;

export const Icon = Styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${props => props.theme.colors.text };

`;