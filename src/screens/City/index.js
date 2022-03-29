import React, { useState } from 'react';

import { TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Search from '../../assets/search.svg';
import Api from '../../Api';
import { cityUser } from '../../util/cityUser';

import {
  Container,
  Header,
  IconSearch,
  NoResults,
  NoTextSecondary,
  CityArea,
  CityName,
  CountryName,
  CityButton,
  CityNameButton
} from './style';

export default () => {
  const [citySearch, setCitySearch] = useState('');
  const [citys, setCitys] = useState();
  const navigation = useNavigation();

  const handleSearch = async () => {
    if (citySearch !== '') {
      if (citySearch.includes(' ')) citySearch.replace(' ', '_')
      const response = await Api.search(citySearch);
      if (response.by !== "default") {
        const result = response;
        setCitys(result);
      } else {
        Alert.alert('Aviso', 'Não conseguimos localizar esta cidade, digite novamente.')
      }
    } else {
      Alert.alert('Aviso', 'Preencha o campo de busca.')
    } 
  }

  const handleAdd = (city) => {
    cityUser.citys.push(city)
    navigation.reset({ routes: [{name: 'Home'}]})
  }

  return (
    <Container>
      <Header>
        <TextInput 
          placeholder="Digite o nome de uma cidade"
          placeholderTextColor="#FFF"
          value={citySearch}
          onChangeText={(t) => setCitySearch(t)}
          style={{ 
            padding: 10, 
            borderBottomWidth: 1, 
            borderBottomColor: '#F0F0F0', 
            color: '#FFF',
            fontSize: 18 
          }}
        />
        <IconSearch onPress={handleSearch}>
          <Search width="26" height="26" fill="#FFF" />
        </IconSearch>
      </Header>

      { citys === undefined  &&
        <NoResults>
          <NoTextSecondary>
            Tente adicionar uma cidade digitando o nome dela.
          </NoTextSecondary>
        </NoResults>
      }

      {citys !== undefined && 
        <CityArea style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
        }}>
          <CityName>{citys?.results.city}</CityName>
          <CountryName>Brasil</CountryName>
          <CityButton onPress={() => handleAdd(citys)}>
            <CityNameButton>ADICIONAR</CityNameButton>
          </CityButton>
        </CityArea>
      }

      
    </Container>
  )
}
