import React, { useCallback, useEffect } from 'react'

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { useWalletConnect } from '@walletconnect/react-native-dapp'

import NftDetailsScreen from '../screens/NftDetailsScreen'
import SearchNFT from '../screens/SearchNFT'
import NftScreen from '../screens/NftScreen'

const Stack = createStackNavigator()

const ScreenOptions = {
  headerShown: false,
}

const WalletAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length,
  )}`
}

const Navigation = ({ navigation }) => {
  const connector = useWalletConnect()

  const connectWallet = useCallback(() => {
    return connector.connect()
  }, [connector])

  const killSession = useCallback(() => {
    return connector.killSession()
  }, [connector])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen name="Home" component={NftScreen} />
        <Stack.Screen name="Search" component={SearchNFT} />
        <Stack.Screen name="NftDetail" component={NftDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
