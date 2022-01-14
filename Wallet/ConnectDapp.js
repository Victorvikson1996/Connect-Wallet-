import React, { useCallback } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useWalletConnect } from '@walletconnect/react-native-dapp'
import Button from './Button'

const makeAddressShort = (address) => {
  return `${address.slice(0, 5)}...${address.slice(
    address.length - 4,
    address.length,
  )}`
}

export const ConnectDapp = () => {
  return (
    <View>
      <Text>Connect</Text>
    </View>
  )
}
