import React, { useCallback } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import COLORS from '../utils/colors'
import { useWalletConnect } from '@walletconnect/react-native-dapp'
import { useNavigation } from '@react-navigation/native'

import NftImages from '../utils/NftImages'
const { width } = Dimensions.get('window')

const WalletAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length,
  )}`
}

const NftConnectButton = ({ label, onPress, Search }) => {
  const connector = useWalletConnect()

  const connectWallet = useCallback(() => {
    return connector.connect()
  }, [connector])
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Search')}
      style={styles.btn}
    >
      <Text style={{ color: COLORS.black, fontWeight: 'bold' }}>{label}</Text>
    </TouchableOpacity>
  )
}

const NftScreen = ({
  navigation,
  image,
  id,
  title,
  address,
  description,
  attributes,
  onPress,
}) => {
  const NftRandomImages =
    NftImages[Math.floor(Math.random() * NftImages.length)]

  return (
    <SafeAreaView
      style={{ backgroundColor: COLORS.black, flex: 1, alignItems: 'center' }}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.imageNFT}>
        <Image
          style={{ height: 320, width: width * 0.77 }}
          source={{ uri: NftRandomImages }}
        />
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 50,
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.title}>View Your NFT</Text>
          <Text style={styles.title}>By Connecting To Your Wallet</Text>
          <NftConnectButton label="Connet Wallet 🚀 " navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageNFT: {
    height: 320,
    width: 300,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginTop: 150,
  },

  title: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },

  btn: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
})
export default NftScreen
