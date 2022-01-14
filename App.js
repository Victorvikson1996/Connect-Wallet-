import './global'
import * as React from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import ConnectDapp from './Wallet/ConnectDapp'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { WalletConnectProvider } from '@walletconnect/react-native-dapp/dist/providers'

const SCHEME_FROM_APP_JSON = 'connectDapp'

export default function App() {
  return (
    <WalletConnectProvider
      redirectUrl={
        Platform.OS === 'web'
          ? window.location.origin
          : `${SCHEME_FROM_APP_JSON}://`
      }
      storageOptions={{
        asyncStorage: AsyncStorage,
      }}
    >
      <View style={styles.container}>
        <ConnectDapp />
        <StatusBar style="auto" />
      </View>
    </WalletConnectProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
