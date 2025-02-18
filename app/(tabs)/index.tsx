import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import React from 'react';
import { View } from 'react-native';

export default function App() {
  const localUrl = 'http://localhost:5173';
  const ipUrl = 'http://192.168.56.1:5173';

  const url = Platform.OS === 'web' ? localUrl : ipUrl;

  if (Platform.OS === 'web') {
    return (
      <View style={{ flex: 1 }}>
        <iframe src={url} style={{ width: '100%', height: '100vh', border: 'none' }} />
      </View>
    );
  }

  return <WebView source={{ uri: url }} />;
}
