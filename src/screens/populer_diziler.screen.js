import React, {useRef, useEffect} from 'react';
import {SafeAreaView, StyleSheet, BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';
import {useFocusEffect} from '@react-navigation/native';


// https://www.thefragman.com.tr/vizyona-girecek-filmler.html
// https://www.thefragman.com.tr/yeni-turk-dijital-platform-dizileri.html
// https://www.thefragman.com.tr/en-cok-izlenen-dijital-platform-dizileri.html

const PopulerDizilerScreen = () => {
  const webViewRef = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      const handleBackPress = () => {
        if (webViewRef) webViewRef?.current?.goBack()
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, []),
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://www.thefragman.com.tr/en-cok-izlenen-dijital-platform-dizileri.html' }}
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

export default PopulerDizilerScreen;
