import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { WebView } from 'react-native-webview';
import {HEIGHT, WIDTH} from '../helpers/statics';

// https://www.thefragman.com.tr/vizyona-girecek-filmler.html
// https://www.thefragman.com.tr/yeni-turk-dijital-platform-dizileri.html
// https://www.thefragman.com.tr/en-cok-izlenen-dijital-platform-dizileri.html

const PopulerDizilerScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{ uri: 'https://www.thefragman.com.tr/en-cok-izlenen-dijital-platform-dizileri.html' }}
        style={{ height: HEIGHT, width: WIDTH }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
  },
});

export default PopulerDizilerScreen;
