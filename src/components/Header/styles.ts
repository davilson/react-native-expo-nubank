import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  align-items: center;
  padding: 30px 0;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
  margin-left: 8px;
`;
