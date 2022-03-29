import React from 'react';

import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Back from '../../assets/back.svg';

import {
  Container,
  Header,
  IconSearch,
  HeaderText,
  TextPrevisao,
  City,
  CityArea,
  LocalArea,
  CityName,
  CountryName,
  TempArea,
  TempCondition,
  MinAndMax,
  Temperatura
} from './style';

export default ({ route }) => {
  const { results } = route.params
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <IconSearch onPress={() => navigation.goBack()}>
          <Back width="26" height="26" fill="#FFF" />
        </IconSearch>
        <HeaderText>{results.city}</HeaderText>
      </Header>

      <ScrollView
        style={{ flex: 1 }}
      >
        <TextPrevisao>Previsão para os próximos 5 dias</TextPrevisao>
        {
          results.forecast.map((item, index) => (
            <City
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,

                elevation: 2,
              }}
              key={index}
            >
              <CityArea>
                <LocalArea>
                  <CityName>{item.weekday}</CityName>
                  <CountryName>{item.date}</CountryName>
                </LocalArea>

                <TempArea>
                  <TempCondition>{item.description}</TempCondition>
                  <MinAndMax>{`${item.max}º - ${item.min}º`}</MinAndMax>
                </TempArea>
              </CityArea>
              <Temperatura>{item.min}º</Temperatura>
            </City>
          )).slice(0,5)
        }
      </ScrollView>

    </Container>
  )
}
