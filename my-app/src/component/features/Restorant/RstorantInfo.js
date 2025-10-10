import React from 'react'
import { StyleSheet } from 'react-native'
import {Card} from 'react-native-paper'
import styled from 'styled-components/native'

// const Titile= styled.Text `
// backgroundcolor:'blue'
// `
// const Card= styled(Card)`
//  backgroundColor:'white'

// `
// const CardCover=styled(Card)`
//  padding:20
//  backgroundColor:'white'
// `
export default function RstorantInfo({restorant={}}) {

    const {
        name='Somerestorant',
        icon='',
        photo=[''],
        address='some strait line',
        isopennow='true',
        rating=4
    }=restorant
  return (
       <>
        <Card elevation={5} style={styles.card}>
            <Card.Cover  key={name} style={styles.cover} source={{uri:photo[0]}}/>

            <Titile style={styles.name}>{name}</Titile>

        </Card>
       </>
  )
}

const styles=StyleSheet.create({
    card:{
        backgroundColor:'white'

    },
    cover:{
        padding:20
    },
    name:{
        padding:20
    }
})

