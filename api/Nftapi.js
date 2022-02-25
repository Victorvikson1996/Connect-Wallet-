import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { fetchNFTs } from './FetchNft'

const endpoint =
  'https://polygon-mainnet.g.alchemy.com/v2/7aAMFZRvvz51fTUEVIIvlcPdtY8aylp8'

const Nftapi = () => {
  const [listData, setListData] = useState([])
  const [selectedNft, setSelectedNft] = useState(0)
  // const [contractAddress, setContractAddress] = useState('')
  const [NFTs, setNFTs] = useState('')

  useEffect(() => {
    getNFTsMetadata()
  }, [])

  const getNFTsMetadata = async (NFTS, endpoint) => {
    const contractAddress = '0xa9e893cc12026a2f6bd826fdb295eac9c18a7e88'
    const endpoint =
      'https://polygon-mainnet.g.alchemy.com/v2/7aAMFZRvvz51fTUEVIIvlcPdtY8aylp8'
    const NFTsMetadata = await Promise.allSettled(
      NFTS.map(async (NFT) => {
        const metadata = await fetch(
          `${endpoint}/v1/getNFTMetadata?contractAddress=${NFT.contract.address}&tokenId=${NFT.id.tokenId}`,
        ).then((data) => data.json())
        let image
        console.log('metadata', metadata)
        if (metadata.media[0].uri.gateway.length) {
          image = metadata.media[0].uri.gateway
        } else {
          image = 'https://via.placeholder.com/500'
        }

        return {
          id: NFT.id.tokenId,
          contractAddress: NFT.contract.address,
          image,
          title: metadata.metadata.name,
          description: metadata.metadata.description,
          attributes: metadata.metadata.attributes,
        }
      }),
    )

    return NFTsMetadata
  }

  return (
    <View>
      <Button />
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {},
})

export default Nftapi
