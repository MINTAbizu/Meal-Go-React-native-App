import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import {Card} from 'react-native-paper'
import styled from 'styled-components/native'
import { Spacer } from '../../Spacer/Spacer'
import {Open,Section,SectionEnd,Card,CardCover,Info,Titile,RatingRow,Address} from '../Restorant/Rstorantinfostyle.js'


import { SvgXml } from 'react-native-svg';

export default function RstorantInfo({restorant={}}) {

    const {
        name='Somerestorant',
        icon='',
        photo=[''],
        address='some strait line',
        isopennow='true',
        isclosedtemoprarly='true',
        rating=4
    }=restorant

    // const ratingArray=Array.from(new Array(Math.floor(rating)))
  return (
       <>
        <Card elevation={5} >
            <Card.Cover  key={name} source={{uri:photo[0]}}/>
            <Info>
            <Titile >{name}</Titile>
            <Section >

                   {/* <RatingRow> 
            {
                ratingArray.map(()=>{
                    <SvgXml xml={star}  width={20} height={20}/> to use this svg first we create star.js to hold star links

                })

            }
            </RatingRow>  */}

            <SectionEnd>
                {isclosedtemoprarly&& <Text label='' style={{color:'red'}}>
                    ClosedTemporarily
                    </Text>}
                    <Spacer  Varieant='Top.small'/>
                 <View style={{paddingLeft:"10px"}}/>
                    {isopennow && <Open xml={open}  width={20} height={20}/>}
                    <View style={{paddingLeft:"10px"}}/>
                   
                    <Image source={{uri:icon}}/>
                
            </SectionEnd>

            </Section>
          
            
            <Address >{name}</Address>
             </Info>

        </Card>
       </>
   
  )
}

// const styles=StyleSheet.create({
//     card:{
//         backgroundColor:'white'

//     },
//     cover:{
//         padding:20
//     },
//     name:{
//         padding:20
//     }
// })

