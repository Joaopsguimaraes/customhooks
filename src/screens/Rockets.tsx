import {FC} from 'react';
import {Text, View} from 'react-native';
import React from 'react';
import {useList} from '../hooks/useList';
import {screenStyle} from '../styles/screen';
import {RocketsType} from '../@types/rocket-type';
import RocketsList from '../components/RocketList';

async function fetchRockets(): Promise<RocketsType[]> {
  const response: Response = await fetch(
    'https://api.spacexdata.com/v4/rockets/',
  );
  const data: RocketsType[] = await response.json();
  return data;
}

const Rockets: FC = () => {
  const {list} = useList<RocketsType>(fetchRockets);

  return (
    <View style={screenStyle.container}>
      <Text style={screenStyle.title}>Foguetes</Text>
      <RocketsList rockets={list} />
    </View>
  );
};

export default Rockets;
