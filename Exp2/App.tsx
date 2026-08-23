/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Welcome from './Component/Exp2/Welcome';
import Counter from './Component/Exp2/Counter';
import LogIn from './Component/Exp2/LogIn';
import StudentCard from './Component/Exp2/StudentCard';
import AboutUs from './Component/Exp3/AboutUs';
import FlexExample from './Component/Exp3/FlexExample';
import FormValidation from './Component/Exp3/FormValidation';
import FruitList from './Component/Exp3/FruitList';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      {/* <Welcome /> */}
      {/* <Counter/> */}
      {/* <LogIn/> */}
      {/* <StudentCard name="Sneha Patil" prn="23UAM106" department="AI & ML" /> */}
      {/* <AboutUs/> */}
      {/* <FlexExample/> */}
      {/* <FormValidation/> */}
      <FruitList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
  },
});

export default App;
