import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { Container, Top, Logo, Title } from './styles';

import logo from '../../assets/logo.png';
import { ImageSourcePropType } from 'react-native';
import colors from '../../styles/colors';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo as ImageSourcePropType} />
        <Title>Davilson</Title>
      </Top>
      <MaterialIcons
        name="keyboard-arrow-down"
        size={20}
        color={colors.white}
      />
    </Container>
  );
}
