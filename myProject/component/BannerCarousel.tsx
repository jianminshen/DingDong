import React from 'react'
import Carousel from 'react-native-reanimated-carousel'
import {View, Text,Dimensions,Image} from 'react-native'
const {width, height, scale} = Dimensions.get('window');
import banner1 from '../image/milk.jpeg';
import banner2 from '../image/salad.jpeg';
import banner3 from '../image/sandwich.jpeg';

const imageArr = [
    {img:banner1},
    {img:banner2},
    {img:banner3}
]

const Test = ({item}) =>{
    console.log(item)
    
    return (
        <View style={{height:150,width:width}}>
            <Image source={item.img}/>
        </View>
    )
}

const BannerCarousel = () => {
    console.log(imageArr)
    return (
        <Carousel
            width={width}
            height={200}
            data={imageArr}
            renderItem={({item}) => <Test item={item}/>}
            autoPlay={true}
            autoPlayInterval={1000}
        />
    )
}

export default BannerCarousel