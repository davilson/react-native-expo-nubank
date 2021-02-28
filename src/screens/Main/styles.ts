import styled from 'styled-components/native';
import { Animated } from 'react-native';
import colors from '../../styles/colors';

export const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background-color: ${colors.white};
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: ${colors.gray2};
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: ${colors.black};
`;

export const CardFooter = styled.View`
  padding: 30px;
  background-color: ${colors.lightGray};
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: ${colors.black};
`;
