import React from 'react';
import {FC} from 'react';
import {View} from 'react-native';
import {cardStyle} from '../styles/card';
import DoubleData from '../shared/DoubleData';
import {MissionsType} from '../@types/missions-type';

interface MissionCardProps {
  mission: MissionsType;
}

const MissionCard: FC<MissionCardProps> = ({mission}) => {
  return (
    <View style={cardStyle.container}>
      <DoubleData
        data={{
          label: 'Missão:',
          value: mission.mission_name,
        }}
      />
      <DoubleData
        data={{
          label: 'Descrição:',
          value: mission.description,
        }}
      />
      <DoubleData
        data={{
          label: 'Fabricante:',
          value: mission.manufacturers[0],
        }}
      />
      <DoubleData
        data={{
          label: 'Payload:',
          value: mission.payload_ids[0],
        }}
      />
      <DoubleData
        data={{
          label: 'Wikipedia:',
          value: mission.wikipedia,
        }}
      />
      <DoubleData
        data={{
          label: 'Website:',
          value: mission.website,
        }}
      />
      <DoubleData
        data={{
          label: 'Twitter:',
          value: mission.twitter,
        }}
      />
    </View>
  );
};
export default MissionCard;
