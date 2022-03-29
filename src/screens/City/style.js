import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  background-color: #00aaf2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const IconSearch = styled.TouchableOpacity`
  padding: 5px;
`;

export const NoResults = styled.View`
  flex: 1;
  background-color: #fafafa;
  align-items: center;
  justify-content: flex-start;
`;

export const NoTextSecondary = styled.Text`
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
  width: 328px;
  color: gray;
`;

export const CityArea = styled.View`
  width: 328px;
  height: 130px;
  padding: 15px;
  flex-direction: column;
  background-color: #FFF;
  align-self: center;
  margin-top: 20px;
  border-radius: 5px;
  justify-content: space-between;
`;

export const CityName = styled.Text`
  font-size: 24px;
`;

export const CityButton = styled.TouchableOpacity`
  width: 100px;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

export const CityNameButton = styled.Text`
  color: #0078be;
  font-size: 14px;
  font-weight: bold;
`;

export const CountryName = styled.Text`
  font-size: 14px;
`;