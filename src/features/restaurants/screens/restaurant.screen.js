import React from 'react';
import { StatusBar,StyleSheet, Text, View } from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfo} from '../components/restaurants-info.component';



export const RestaurantScreen = ()=>{

    return(
    <View style={styles.container}>
      <View style={{padding:16, marginTop:StatusBar.currentHeight,backgroundColor:'yellow'}}>
      <Searchbar/>
      
      </View>
      <View>
          <RestaurantInfo/>
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
  });