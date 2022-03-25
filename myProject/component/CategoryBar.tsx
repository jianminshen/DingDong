import React from 'react'
import {View,ScrollView,Text,Image,StyleSheet} from 'react-native'
import mashroom from '../image/homeIcon.jpeg'
import strawberry from '../image/LoginIcon.jpeg'

const styles = StyleSheet.create({
    categoryItem:{
        marginRight:10,
    }
})
const CategoryBar = () => {
    const category = [
        {name:'蔬菜豆制品',
        img:mashroom},
        {name:'肉禽蛋',
        img:mashroom},
        {name:'水产海鲜',
        img:mashroom},
        {name:'水果鲜花',
        img:mashroom},
        {name:'乳品烘培',
        img:mashroom},
        {name:'熟食卤味',
        img:mashroom},
        {name:'方便食品',
        img:mashroom},
        {name:'预制菜',
        img:strawberry},
        {name:'速食冻品',
        img:strawberry},
        {name:'粮油调味',
        img:strawberry},
        {name:'酒水饮料',
        img:strawberry},
        {name:'火锅到家',
        img:strawberry},
        {name:'休闲零食',
        img:strawberry},
        {name:'日用百货',
        img:strawberry}
    ]
    return (
        <ScrollView showsHorizontalScrollIndicator={false}
        style={{flexDirection:'row',marginHorizontal:20}}>
            {/* <View style={{paddingHorizontal:10,height:200,backgroundColor:'green'}}> */}
            <View style={{flexDirection:'row'}}>
                {
                    category.slice(0,7).map(item=>(
                        <View style={styles.categoryItem}>
                            <Image source={item.img} style={{width:50,height:50}}/>
                            <Text>{item.name}</Text>
                        </View>
                    ))
                }
            </View>
            <View style={{flexDirection:'row',marginTop:20}}>
                {
                    category.slice(7,14).map(item=>(
                        <View style={styles.categoryItem}>
                            <Image source={item.img} style={{width:50,height:50}}/>
                            <Text>{item.name}</Text>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    )
}

export default CategoryBar