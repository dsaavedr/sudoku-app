import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { PersistGate } from "redux-persist/integration/react";

import { Home, About, Sudoku, GameEnded, DifficultySelect } from "./src/views";
import { LIGHT_BACKGROUND_COLOR, MAIN_BACKGROUND_COLOR } from "./src/constants";
import store, { persistor } from "./src/state/store";
import { useCallback, useEffect, useState } from "react";

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

// Keep spash screen visible
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Mock delay for testing
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.error(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={DarkTheme} onReady={onLayoutRootView}>
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
            <Stack.Screen
              name="Difficulty"
              component={DifficultySelect}
              options={{
                headerTitle: "New Game",
              }}
            />
            <Stack.Screen
              name="Game Ended"
              component={GameEnded}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" hidden={!appIsReady} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});
