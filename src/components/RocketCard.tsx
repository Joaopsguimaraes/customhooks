import React from 'react';
import {FC} from 'react';
import {Image, View} from 'react-native';
import {cardStyle} from '../styles/card';
import DoubleData from '../shared/DoubleData';
import {RocketsType} from '../@types/rocket-type';

interface RocketCardProps {
  rocket: RocketsType;
}

const RocketCard: FC<RocketCardProps> = ({rocket}) => {
  return (
    <View style={cardStyle.container}>
      <Image
        source={{uri: rocket.flickr_images[0]}}
        style={cardStyle.image}
        resizeMode="cover"
      />
      <DoubleData
        data={{
          label: 'Nome:',
          value: rocket.name,
        }}
      />
      <DoubleData
        data={{
          label: 'Tipo:',
          value: rocket.type,
        }}
      />
      <DoubleData
        data={{
          label: 'Empresa:',
          value: rocket.company,
        }}
      />
      <DoubleData
        data={{
          label: 'País:',
          value: rocket.country,
        }}
      />
      <DoubleData
        data={{
          label: 'Primeiro voo:',
          value: rocket.first_flight,
        }}
      />
      <DoubleData
        data={{
          label: 'Altura:',
          value: rocket.height.meters,
        }}
      />
    </View>
  );
};
export default RocketCard;
