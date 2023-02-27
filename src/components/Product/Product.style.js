import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    margin: 7,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  product_info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  product_name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  product_price: {
    marginTop: 5,
    fontWeight: 'bold',
    color: 'gray',
  },
  stock: {
    marginTop: 5,
    color: 'red',
    fontWeight: 'bold',
  },
});
