import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.26,
    elevation: 5,
  },
  image: {
    width: 300,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export const cardStyle = style;
