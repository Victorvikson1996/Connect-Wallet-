import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import COLORS from '../utils/colors'

const NftConnectButton = ({ label, onPress, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Search')}
      style={styles.btn}
      activeOpacity={0.7}
    >
      <Text style={{ color: COLORS.black, fontWeight: 'bold' }}>
        Connect Wallet 🚀{' '}
      </Text>
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
}) => {
  return (
    <SafeAreaView
      style={{ backgroundColor: COLORS.black, flex: 1, alignItems: 'center' }}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.imageNFT}>
        <Image
          style={{ height: 250, width: 180, marginTop: 70 }}
          source={require('../src/assets/nft.png')}
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
          <NftConnectButton navigation={navigation} />
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
