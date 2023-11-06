import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

// ** Third Party Packages
import {WebView} from 'react-native-webview';

// ** Custom Components
import Logo from '../assets/logos/logo.png';

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const handleWebViewLoad = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer(isLoading)}>
          <Image source={Logo} style={styles.logo} />
          <ActivityIndicator size="large" color="#7e1313" />
        </View>
      )}
      <SafeAreaView style={styles.WebViewContainer}>
        <WebView
          source={{uri: 'https://www.truexcellence.rqapps.com'}}
          originWhitelist={['*']}
          style={styles.webview(isLoading)}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          useWebKit={true}
          mixedContentMode="always"
          onLoad={handleWebViewLoad}
          onLoadEnd={handleWebViewLoad}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  WebViewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: isLoading => ({
    flex: isLoading ? 0 : 1,
  }),
  loadingContainer: isLoading => ({
    flex: isLoading ? 1 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '40%',
    left: '40%',
  }),
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

// @ts-ignore
export default Main;
