import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Card} from 'react-native-paper'
import styled from 'styled-components/native'
// import { Spacer } from '../../Spacer/Spacer'
// import {SvgXml} from 'react-native-svg'

// const Titile= styled.Text `
// backgroundcolor:'blue'


// const RatingRow= styled.View `
// flex-direction:row
// `

// color:${(props)=>props.theme.color.ui.error}
// `
// const Card= styled(Card)`
//  backgroundColor:'white'
//  color:${(props )=>props.theme.color.text.primary}
// `
const Info = styled(View)`

padding:${(props)=>props.theme.spacing.space[3]} 

`
const Address=styled(Text)`
font-size:${(props)=> props.theme.font.h5}

`
//  const CardCover=styled(Card.Cover)`
//  padding:${(props)=>props.theme.size[3]}
//   backgroundColor:'white'
// `
 
const Section =styled(View)`
flex-direction:row
align-item:center

`
const SectionEnd =styled(View)`
flex-direction:row
flex:1
justify-content:flex-end

`
const Open= styled(svgxml)`
flex-direction:row
`
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
        <Card elevation={5} style={styles.card}>
            <Card.Cover  key={name} style={styles.cover} source={{uri:photo[0]}}/>
            <Info>
            <Titile style={styles.name}>{name}</Titile>
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
                    {/* <Spacer  Varieant='Top.small'/> */}
                 <View style={{paddingLeft:"10px"}}/>
                    {isopennow && <Open xml={open}  width={20} height={20}/>}
                    <View style={{paddingLeft:"10px"}}/>
                   
                    <Image source={{uri:icon}}/>
                
            </SectionEnd>

            </Section>
          
            
            <Address style={styles.name}>{name}</Address>
             </Info>

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

