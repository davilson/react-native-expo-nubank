import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../screens/Main';
import colors from '../styles/colors';

const Stack = createStackNavigator();

function StackRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export default StackRoute;
