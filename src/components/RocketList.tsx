import React, {FC} from 'react';
import {FlatList} from 'react-native';
import RocketCard from './RocketCard';
import {RocketsType} from '../@types/rocket-type';

interface RocketsListProps {
  rockets: RocketsType[];
}

const RocketsList: FC<RocketsListProps> = ({rockets}) => {
  return (
    <FlatList
      data={rockets}
      keyExtractor={item => item.id}
      renderItem={({item}) => <RocketCard rocket={item} />}
    />
  );
};

export default RocketsList;
