import React, { useState } from 'react';
import { Animated } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';
import colors from '../../styles/colors';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

const Main = () => {
  const [contentHeight, setContentHeight] = useState(0);
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event: PanGestureHandlerStateChangeEvent) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? contentHeight : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? contentHeight : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />
      <Content
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => {
          setContentHeight(height);
        }}
      >
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, contentHeight],
                    outputRange: [-50, 0, contentHeight],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <CardHeader>
              <MaterialIcons
                name="attach-money"
                size={28}
                color={colors.gray}
              />
              <MaterialIcons
                name="visibility-off"
                size={28}
                color={colors.gray}
              />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 360.321,00</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$520,00 recebida de John Doe hoje às 15:25h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
};

export default Main;
