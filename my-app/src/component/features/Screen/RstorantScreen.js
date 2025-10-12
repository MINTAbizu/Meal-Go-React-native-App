import React from 'react'
import { SafeAreaView, View } from 'react-native'
import {searchBar} from 'react-native-paper'
import {RestorantInfo} from '../Restorant/RstorantInfo'
// install  from react native-paper
import styled from 'styled-components/native'

// const SafeArea=styled(View)`
//     flex: 1,
//     
//     ${StatusBar.currentHeight  && `margin-top:${StatusBar.currentHeight}`px} ,
// `
// const SearchContainer=styled(View)`
// padding:16px
// `

const SearchContainer=styled(View)`
padding:20px
`
const RestorantListcontainer=styled(View)`
padding:16px,
background-color:blue,
flex:1
`
export default function RstorantScreen() {
  return (
      <>
        <SafeAreaView style={styles.container} >
          <View>
            <searchBar/>
          </View>
           <View>
      <RestorantInfo/>
          </View>
          
         
        </SafeAreaView>
       </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b62121ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:StatusBar.currentHeight,
  },

});
