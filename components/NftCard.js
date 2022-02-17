import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native'
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  REACT_APP_ALCHEMY_ETHEREUM_ENDPOINT,
  REACT_APP_ALCHEMY_POLYGON_ENDPOINT,
  REACT_APP_ALCHEMY_MUMBAI_ENDPOINT,
  INFURA_API_KEY,
} from '@env'
import COLORS from '../utils/colors'

const { width } = Dimensions.get('window')

const NftCard = ({
  image,
  data,
  navigation,
  id,
  address,
  description,
  attributes,
  price,
  details,
}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={{ height: '100%', width: '100%', borderRadius: 20 }}
        source={data.image}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: width * 0.55,
    backgroundColor: COLORS.white,
    marginLeft: 20,
    shadowColor: COLORS.grey,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { height: 10 },
    elevation: 10,
    resizeMode: 'contain',
    borderRadius: 20,
    borderWidth: 7,
    borderColor: COLORS.white,
  },
})

export default NftCard
