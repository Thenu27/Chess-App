import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ChessBoard from './ChessBoard'; // Adjust the path as necessary

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ChessBoard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
