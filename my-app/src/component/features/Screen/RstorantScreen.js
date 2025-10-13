import React from 'react'
import { SafeAreaView, View } from 'react-native'
import {searchBar} from 'react-native-paper'
import {RestorantInfo} from '../Restorant/RstorantInfo'
// install  from react native-paper
// import styled from 'styled-components/native'
import { StatusBar,FlatList } from 'react-native'
import styled from 'styled-components/native'
import {SafeArea} from '../../utility/SafeAreaView.js'
//export const SafeArea=styled(View)`
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
// npm i @react-navigation/native
// expo install react-native-gesture-handler
//   react-native-reanimated
//   react-native-screens
//   react-native-safe-area-context
//   react-native-community/masked-view

//   npm install react-navigation/bootom-tabs
 
export default function RstorantScreen() {
  return (
      <>
        <SafeAreaView style={styles.container} marginTop={StatusBar.currentHeight} >
          <View>
            <searchBar/>
          </View>
           <View>
            <FlatList
                 data={[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]}
                 renderItem={()=> <RestorantInfo/>}
                 keyExtractor={(item)=>item.name}
                 contentContainerStyle={{padding:16}}
            
            />
     
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
