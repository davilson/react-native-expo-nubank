import React from 'react';
import { Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';

import { Container, TabsContainer, TabItem, TabText } from './styles';

type TabsProps = {
  translateY: Animated.Value;
};

export default function Tabs({ translateY }: TabsProps) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}
    >
      <TabsContainer>
        <TabItem>
          <MaterialIcons name="credit-card" size={24} color={colors.white} />
          <TabText>Cartão virtual</TabText>
        </TabItem>
        <TabItem>
          <MaterialIcons
            name="chat-bubble-outline"
            size={24}
            color={colors.white}
          />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <MaterialIcons name="arrow-downward" size={24} color={colors.white} />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <MaterialIcons name="arrow-upward" size={24} color={colors.white} />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <MaterialIcons
            name="settings-input-composite"
            size={24}
            color={colors.white}
          />
          <TabText>Ajustar limite</TabText>
        </TabItem>
        <TabItem>
          <MaterialIcons name="attach-money" size={24} color={colors.white} />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <MaterialIcons name="lock" size={24} color={colors.white} />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
        <TabItem>
          <MaterialIcons name="person-add" size={24} color={colors.white} />
          <TabText>Indicar amigos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
