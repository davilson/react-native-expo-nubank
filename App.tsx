import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import BottomTabs from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import colors from './src/styles/colors';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
