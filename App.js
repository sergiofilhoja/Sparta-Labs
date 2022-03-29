import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';

LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load RNGestureHandlerModule. This may lead to deadlocks']);

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#00aaf2" />
      <MainStack />
    </NavigationContainer>
  )
}

export default App;