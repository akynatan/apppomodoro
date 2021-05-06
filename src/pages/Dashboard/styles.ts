import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const Content = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Time = styled.Text`
  color: #f4ede8;
  font-size: 50px;
  font-family: 'Orbitron-Medium';
  line-height: 58px;
  padding: 20px;
`;

export const ContainerButtonsTime = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ContentButtonsTime = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtonsAcions = styled.View`
  align-items: center;
  justify-content: center;
`;
