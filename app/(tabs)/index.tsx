import React, { useEffect, useState } from 'react';
import { Platform, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { NetworkInfo } from 'react-native-network-info';

export default function App() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    if (Platform.OS !== 'web') {
      NetworkInfo.getIPAddress().then(ip => {
        setIpAddress(ip);
      });
    }
  }, []);

  const localUrl = 'http://localhost:5173';
  const ipUrl = `http://${ipAddress}:5173`; 

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
