import React from 'react';
import { StatusBar,StyleSheet, Text, View } from 'react-native';
import {Searchbar} from 'react-native-paper';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen';

export default function App() {

const [searchQuery,setSearchQuery] = React.useState('')

const onChangeSearch = query=> setSearchQuery(query)

  return (
    <RestaurantScreen/>
  );
}


