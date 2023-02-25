import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, About, Sudoku } from './src/views';
import { LIGHT_BACKGROUND_COLOR, MAIN_BACKGROUND_COLOR } from './src/constants';

const Stack = createStackNavigator();

const navigatorOptions = {
  cardStyle: {backgroundColor: MAIN_BACKGROUND_COLOR},
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      })
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp'
      })
    }
  }),
  presentation: "modal",
  headerStyle: {
    backgroundColor: LIGHT_BACKGROUND_COLOR
  },
  headerTintColor: "#fff"
};

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          screenOptions={navigatorOptions}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Sudoku"
            component={Sudoku}
          />
          <Stack.Screen
            name="About"
            component={About}
          />
        </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

