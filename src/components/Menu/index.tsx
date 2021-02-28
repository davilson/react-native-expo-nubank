import React from 'react';
import { Animated } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';
import colors from '../../styles/colors';

type MenuProps = {
  translateY: Animated.Value;
};

export default function Menu({ translateY }: MenuProps) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode
          value="@davilson"
          color={colors.white}
          backgroundColor={colors.primary}
        />
      </Code>
      <Nav>
        <NavItem>
          <MaterialIcons name="help-outline" size={20} color={colors.white} />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="person-outline" size={20} color={colors.white} />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons
            name="monetization-on"
            size={20}
            color={colors.white}
          />
          <NavText>Configurar NuConta</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="credit-card" size={20} color={colors.white} />
          <NavText>Configurar Cartão</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="smartphone" size={20} color={colors.white} />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
