import React, { useEffect, useState } from 'react';
import { Platform, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { NetworkInfo } from 'react-native-network-info';

export default function App() {
  if (Platform.OS === 'web') {
    return (
      <View style={{ flex: 1 }}>
        <iframe src={'http://192.168.1.64:5173/'} style={{ width: '100%', height: '100vh', border: 'none' }} />
      </View>
    );
  }

  return <WebView source={{ uri: 'http://192.168.1.64:5173/' }} />;
}
