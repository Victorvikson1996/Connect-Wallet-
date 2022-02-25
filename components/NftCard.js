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

import NftDetailsScreen from '../screens/NftDetailsScreen'

import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('window')

const DetailsBtn = ({ label, onPress, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Search')}
      style={styles.btn}
      activeOpacity={0.7}
    >
      <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
        View Details 🚀{' '}
      </Text>
    </TouchableOpacity>
  )
}

const NftCard = ({
  image,
  data,
  // navigation,
  id,
  address,
  description,
  attributes,
  price,
  details,
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('NftDetail', data)}
      activeOpacity={0.7}
      style={styles.card}
    >
      <Image
        style={{ height: '100%', width: '100%', borderRadius: 20 }}
        source={data.image}
      />
      <View style={styles.details}>
        <Text style={{ marginLeft: 2, fontSize: 12, fontWeight: 'bold' }}>
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 400,
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

  details: {
    height: 70,
    width: '100%',
    position: 'absolute',
    backgroundColor: COLORS.white,
    bottom: 0,
    borderBottomEndRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardBtn: {
    width: 70,
    height: 30,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btn: {
    height: 50,
    width: 70,
    backgroundColor: COLORS.black,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
})

export default NftCard
