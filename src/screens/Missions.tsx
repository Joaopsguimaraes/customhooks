import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useList} from '../hooks/useList';
import {screenStyle} from '../styles/screen';
import MissionList from '../components/MissionList';
import {MissionsType} from '../@types/missions-type';

async function fetchMissions(): Promise<MissionsType[]> {
  const response: Response = await fetch(
    'https://api.spacexdata.com/v3/missions',
  );
  const data: MissionsType[] = await response.json();
  return data;
}

const Missions: FC = () => {
  const {list} = useList<MissionsType>(fetchMissions);

  return (
    <View style={screenStyle.container}>
      <Text style={screenStyle.title}>Missões</Text>
      <MissionList mission={list} />
    </View>
  );
};

export default Missions;
