import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../Spacer/Spacer';
import { SvgXml } from 'react-native-svg';
import { Open, Section, SectionEnd, Info, Titile, RatingRow, Address } from '../Restorant/Rstorantinfostyle.js';

export default function RstorantInfo({ restorant = {} }) {
  const {
    name = 'Some Restorant',
    icon = '',
    photo = [''],
    address = 'Some Street',
    isopennow = true,
    isclosedtemoprarly = false,
    rating = 4,
  } = restorant;

  // const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card elevation={5}>
        {/* Use react-native-paper Card.Cover */}
        <Card.Cover key={name} source={{ uri: photo[0] }} />
        <Info>
          <Titile>{name}</Titile>
          <Section>
            {/* Uncomment when using SVG stars */}
            {/* <RatingRow>
              {ratingArray.map((_, i) => (
                <SvgXml xml={star} width={20} height={20} key={i} />
              ))}
            </RatingRow> */}
            <SectionEnd>
              {isclosedtemoprarly && <Text style={{ color: 'red' }}>Closed Temporarily</Text>}
              <Spacer Varieant="Top.small" />
              <View style={{ paddingLeft: 10 }} />
              {isopennow && <Open xml={open} width={20} height={20} />}
              <View style={{ paddingLeft: 10 }} />
              {icon ? <Image source={{ uri: icon }} style={{ width: 20, height: 20 }} /> : null}
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </Card>
    </SafeAreaView>
  );
}
