import { useWalletConnect } from '@walletconnect/react-native-dapp'

import React, { useState, useCallback } from 'react'

import { View, Text } from 'react-native'
import React from 'react'

const connectionUtil = () => {
  return (
    <View>
      <Text>connectionUtil</Text>
    </View>
  )
}

const WalletAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length,
  )}`
}

const connector = useWalletConnect()

const connectWallet = useCallback(() => {
  return connector.connect()
}, [connector])

const killSession = useCallback(() => {
  return connector.killSession()
}, [connector])

export default {
  WalletAddress,
  connectWallet,
  killSession,
  connector,
  connectionUtil,
}
