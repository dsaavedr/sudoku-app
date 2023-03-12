import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import { Home, About, Sudoku } from "./src/views";
import { LIGHT_BACKGROUND_COLOR, MAIN_BACKGROUND_COLOR } from "./src/constants";
import store from "./src/state/store";

const Stack = createStackNavigator();

const navigatorOptions = {
  cardStyle: { backgroundColor: MAIN_BACKGROUND_COLOR },
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: "clamp",
      }),
    },
  }),
  presentation: "modal",
  headerStyle: {
    backgroundColor: LIGHT_BACKGROUND_COLOR,
  },
  headerTintColor: "#fff",
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={navigatorOptions}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Sudoku" component={Sudoku} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
