import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  selected: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  height: 60px;
  background: #ff9000;
  border-radius: 10px;

  justify-content: center;
  align-items: center;

  ${(props: ContainerProps) =>
    props.selected &&
    css`
      background: #a26516;
    `}
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;
