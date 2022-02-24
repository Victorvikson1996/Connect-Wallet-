import './global'
import React, { useCallback, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ConnectDapp from './Wallet/ConnectDapp'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { WalletConnectProvider } from '@walletconnect/react-native-dapp/dist/providers'

import {
  withWalletConnect,
  useWalletConnect,
} from '@walletconnect/react-native-dapp'

import Navigation from './navigation/Navigation'

const SCHEME_FROM_APP_JSON = 'connectDapp'

export default function App({}) {
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
      <Navigation />
      {/* <ConnectDapp styles={styles.container} /> */}
      {/* <ChainSelector style={styles.container} /> */}
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
