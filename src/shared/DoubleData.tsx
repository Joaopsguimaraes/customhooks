import React from 'react';
import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface DoubleDataProps {
  data: {
    label: string;
    value: string | number;
  };
}

const DoubleData: FC<DoubleDataProps> = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.label}</Text>
      <Text style={styles.value} numberOfLines={2}>
        {data.value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    flexWrap: 'wrap',
  },
  name: {
    marginHorizontal: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default DoubleData;
