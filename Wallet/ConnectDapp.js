import React, { useCallback } from 'react'
import { Text } from 'react-native'
import { useWalletConnect } from '@walletconnect/react-native-dapp'
import Button from './Button'

const WalletAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length,
  )}`
}

export default function ConnectDapp() {
  const connector = useWalletConnect()

  const connectWallet = useCallback(() => {
    return connector.connect()
  }, [connector])

  const killSession = useCallback(() => {
    return connector.killSession()
  }, [connector])

  return (
    <>
      {!connector.connected ? (
        <Button onPress={connectWallet} label="Connect Your Wallet 🚀 " />
      ) : (
        <>
          <Text>{WalletAddress(connector.accounts[0])}</Text>
          <Button onPress={killSession} label="Sign out 💆 " />
        </>
      )}
    </>
  )
}
