import Styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = Styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background} ;
`;

export const Header = Styled.View`
  background-color: ${({ theme }) => theme.colors.primary };

  width: 100%
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = Styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape };
`;

export const Content = Styled.ScrollView``;

export const ChartContainer = Styled.View`
  width: 100%;
  align-items: center;
`;

export const MonthSelect = Styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 24px;
`;

export const MonthSelectButton = Styled(BorderlessButton)``;

export const MonthSelectIcon = Styled(Feather)`
  font-size: ${RFValue(24)}px;
`;

export const Month = Styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;

export const LoadContainer = Styled.View`
  flex: 1;
  justify-content: center ;
  align-items: center;
`;