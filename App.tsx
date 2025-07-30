import React from 'react';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import store from './src/Redux/Store/Store';
import Routes from './src/Navigation/Routes';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';


const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView style={styles.container}>
          <Routes />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
