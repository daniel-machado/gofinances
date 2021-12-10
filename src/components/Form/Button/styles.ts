import Styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = Styled(RectButton)`
  width: 100%;
  background-color: ${props => props.theme.colors.secondary};

  border-radius: 5px;
  align-items: center;

  padding: 18px;
`;

export const Title = Styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${props => props.theme.colors.shape};
`;