import React from 'react'
import { Text } from 'react-native'

function RstorantInfo({resturants}) {
    const {
        name='some resturants',
        icon='icon',
        photos=[ 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop'],
        isopennow=' some time',
        address='shashmanee',
        rating=5,
        isclosedTemporarily=false


    }=resturants
  return (

      <Text>
        RstorantInfo
      </Text>
    
  )
}

export default RstorantInfo
