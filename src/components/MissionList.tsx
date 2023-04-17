import React from 'react';
import {FC} from 'react';
import {FlatList} from 'react-native';
import MissionCard from './MissionCard';
import {MissionsType} from '../@types/missions-type';

interface MissionListProps {
  mission: MissionsType[];
}

const MissionList: FC<MissionListProps> = ({mission}) => {
  return (
    <FlatList
      data={mission}
      keyExtractor={item => item.mission_id}
      renderItem={({item}) => <MissionCard mission={item} />}
    />
  );
};

export default MissionList;
