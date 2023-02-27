import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Searchbar.style';

const Searchbar = () => {
  return (
    <View>
      <TextInput placeholder="Ara..." style={styles.searchBox} />
    </View>
  );
};

export default Searchbar;
