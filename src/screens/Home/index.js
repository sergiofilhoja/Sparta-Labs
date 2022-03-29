import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Search from '../../assets/search.svg';
import { cityUser } from '../../util/cityUser';

import {
  Container,
  Header,
  HeaderText,
  IconSearch,
  NoResults,
  NoTextResult,
  NoTextSecondary,
  CityArea,
  CityName,
  CountryName,
  LocalArea,
  TempArea,
  TempCondition,
  MinAndMax,
  City,
  Temperatura
} from './style';

export default () => {
  const { citys } = cityUser;
  const [city, setCitys] = useState([]);

  const navigation = useNavigation();

  const handleCity = () => {
    navigation.navigate('City');
  }

  useEffect(() => {
    citys ? setCitys(citys) : setCitys([]);
    console.log('estes')
  }, [citys, city]);

  return (
    <Container>
      <Header>
        <HeaderText>Cidades</HeaderText>
        <IconSearch onPress={handleCity}>
          <Search width="26" height="26" fill="#FFF" />
        </IconSearch>
      </Header>

      { city.length === 0 &&
        <NoResults>
          <NoTextResult>
            Parece que você ainda não adicionou uma cidade
          </NoTextResult>
          <NoTextSecondary>
            Tente adicionar uma cidade usando o botão de busca
          </NoTextSecondary>
        </NoResults>
      }

      { city.length !== 0 &&
        <FlatList 
          data={city} 
          keyExtractor={(item, index) => index}
          refreshControl
          renderItem={(i, index) => (
            <City 
              key={index} 
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
              onPress={() => navigation.navigate('SinglePage', i.item)}
            >
              <CityArea>
                <LocalArea>
                  <CityName>{i.item.results.city}</CityName>
                  <CountryName>Brasil</CountryName>
                </LocalArea>
    
                <TempArea>
                  <TempCondition>{i.item.results.description}</TempCondition>
                  <MinAndMax>Período - {i.item.results.currently}</MinAndMax>
                </TempArea>
              </CityArea>
              <Temperatura>{i.item.results.temp}º</Temperatura>
            </City>
          )} 
        />
      }
    </Container>
  )
}
