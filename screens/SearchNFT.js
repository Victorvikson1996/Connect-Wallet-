import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native'

import NftCard from '../components/NftCard'

import { Searchbar } from 'react-native-paper'
import COLORS from '../utils/colors'
import collections from '../utils/collections'

const SearchNFT = ({
  navigation,
  image,
  id,
  title,
  address,
  description,
  attributes,
}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = (query) => setSearchQuery(query)
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <View style={styles.header}>
        <Image
          style={{ height: 40, width: 40, borderRadius: 40 }}
          source={require('../src/assets/nft.png')}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Searchbar
          placeholder="Insert Your NFT Address"
          style={{ width: 320, marginLeft: 30 }}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Text style={styles.title}>NFTS</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20, paddingBottom: 20 }}
          horizontal
          data={collections}
          renderItem={({ item }) => (
            <NftCard data={item} naviagation={navigation} />
          )}
        />
      </ScrollView>
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

  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    margin: 30,
    fontWeight: 'bold',
    color: COLORS.black,
    fontSize: 25,
  },
})

export default SearchNFT
