import React from 'react'
import {Image, Text,View} from 'react-native'
import {Card} from 'react-native-paper';
export  function RestaurantInfo({restaurant={}}) {
    const {
        name='dhaba',
        icon,
        photos=[
            'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201509/dhaba-story_647_090415065808.jpg'
        ],
        address='lachipur',
        rating=4,
        timing=9,
        isClosed=false
    }= restaurant;
    return (
        <View>
        <Card elevation={5} style={{padding:1,width:500}}>
            <Card.Cover key={name} source={{uri:photos[0]}}/>
        </Card>
       <Text>{address}</Text>
       </View>
    )
}
