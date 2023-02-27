import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Searchbar from './components/Searchbar';
import Product from './components/Product';
import product_data from './product.json';

const App = () => {
  const renderProduct = ({item}) => <Product product={item} />;
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headerTitle}>Ahtustore</Text>
        <Searchbar />
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={product_data}
          renderItem={renderProduct}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: 'purple',
  },
});

export default App;
