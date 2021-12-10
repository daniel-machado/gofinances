import Styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = Styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background} ;
`;

export const Header = Styled.View`
  background-color: ${props => props.theme.colors.primary };

  width: 100%
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = Styled.Text`
  font-family: ${props => props.theme.fonts.regular };
  font-size: ${RFValue(18)}px;
  color: ${props => props.theme.colors.shape };
`;

export const Form = Styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;

  padding: 24px;
`;

export const Fields = Styled.View`
`;

export const TransactionsTypes = Styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 8px;
  margin-bottom: 16px;
`;
