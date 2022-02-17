import './global'
import React from 'react'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import ConnectDapp from './Wallet/ConnectDapp'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { WalletConnectProvider } from '@walletconnect/react-native-dapp/dist/providers'
import fetchNFT from './utils/fetchNFT'

import NftScreen from './screens/NftScreen'
import SearchNFT from './screens/SearchNFT'
const SCHEME_FROM_APP_JSON = 'connectDapp'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const ScreenOptions = {
  headerShown: false,
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen name="Home" component={NftScreen} />
        <Stack.Screen name="Search" component={SearchNFT} />
      </Stack.Navigator>
    </NavigationContainer>
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
