import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {MainMenu} from './src/views';

export default function App() {
  return (
    <View style={styles.container}>
      <MainMenu />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  }
});
