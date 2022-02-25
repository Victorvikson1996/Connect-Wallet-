import { StatusBar } from 'expo-status-bar'
import React, { useCallback } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native'

import { useWalletConnect } from '@walletconnect/react-native-dapp'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../utils/colors'

const NftConnectButton = ({ label, onPress, navigation }) => {
  const { width } = Dimensions.get('window')

  const connector = useWalletConnect()

  const killSession = useCallback(() => {
    return connector.killSession()
  }, [connector])

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
      style={styles.btn}
      activeOpacity={0.7}
    >
      <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>{label}</Text>
    </TouchableOpacity>
  )
}

const NftDetailsScreen = ({ navigation, route }) => {
  const data = route.params

  const connector = useWalletConnect()

  const killSession = useCallback(() => {
    return connector.killSession()
  }, [connector])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground style={styles.NftHeader} source={data.image}>
        <View style={styles.header}>
          <Icon
            onPress={() => navigation.goBack()}
            name="chevron-left"
            size={30}
            color={COLORS.white}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>0xb395</Text>
        </View>
      </ImageBackground>
      <View style={styles.Nftdesc}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 40, width: 40, borderRadius: 40 }}
              source={data.creatorImage}
            />
            <Text style={{ color: COLORS.black, marginLeft: 10 }}>0xb395</Text>
          </View>
        </View>
        <View>
          <Text
            style={{ fontSize: 22, marginVertical: 20, fontWeight: 'bold' }}
          >
            Description
          </Text>
          <Text style={{ color: COLORS.black, fontSize: 20 }}>
            DAOs are taking over. Build one yourself for fun. Maybe it's a meme
            DAO for your friends. Maybe it's a DAO that aims to fix climate
            change. Up to you. We'll be going over things like minting a members
          </Text>
        </View>
        {/* <View style={styles.footer}> */}
        <View style={styles.LogOutBtn}>
          <NftConnectButton label="Sign Out 🥺" navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  NftHeader: {
    height: 400,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: COLORS.white,
    overflow: 'hidden',
  },

  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
  },

  Nftdesc: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    top: 430,
    padding: 20,
  },
  footer: {
    width: '100%',
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  footerBtn: {
    backgroundColor: COLORS.black,
    height: 40,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  LogOutBtn: {
    paddingHorizontal: 20,
    marginTop: 50,
    justifyContent: 'space-between',
  },
  btn: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.black,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
})

export default NftDetailsScreen
