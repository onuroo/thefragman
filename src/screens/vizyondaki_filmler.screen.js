import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { WebView } from 'react-native-webview';
import {HEIGHT, WIDTH} from '../helpers/statics';

// https://www.thefragman.com.tr/vizyona-girecek-filmler.html
// https://www.thefragman.com.tr/yeni-turk-dijital-platform-dizileri.html
// https://www.thefragman.com.tr/en-cok-izlenen-dijital-platform-dizileri.html

const VizyondakiFilmlerScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{ uri: 'https://www.thefragman.com.tr/vizyondaki-filmler.html' }}
        style={{ height: '100%', width: '100%' }}
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

export default VizyondakiFilmlerScreen;
