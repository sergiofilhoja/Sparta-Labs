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

export const HeaderText = styled.Text`
  color: #FFF;
  font-size: 22px;
  font-family: Arial;
`;

export const NoResults = styled.View`
  flex: 1;
  background-color: #fafafa;
  align-items: center;
  justify-content: flex-start;
`;

export const NoTextResult = styled.Text`
  font-size: 20px;
  text-align: center;
  width: 300px;
  font-weight: bold;
  margin-top: 50px;
`;

export const NoTextSecondary = styled.Text`
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
  width: 328px;
`;

export const IconSearch = styled.TouchableOpacity`
  padding: 5px;
`;

export const City = styled.TouchableOpacity`
  flex-direction: row;
  width: 328px;
  height: 130px;
  align-self: center;
  align-items: center;
  background-color: #FFF;
  margin-top: 20px;
`;

export const Temperatura = styled.Text`
  color: #f28200;
  font-size: 34px;
`;

export const CityArea = styled.View`
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 80%;
`;

export const CityName = styled.Text`
  font-size: 24px;
`;

export const CountryName = styled.Text`
  font-size: 14px;
  margin-top: 5px;
`;

export const LocalArea = styled.View`
  margin-left: 15px;
`;
export const TempArea = styled.View`
  margin-left: 15px;
`;
export const TempCondition = styled.Text`
  color: #f28200;
  font-size: 14px;
`;
export const MinAndMax = styled.Text`
  font-size: 12px;
  margin-top: 5px;
`;