import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    hotSelectContainer:{
        flexDirection:'row'
    },
    selectItem:{
        marginRight:10,
        padding:10,
        borderRadius:10,
        backgroundColor:'#FAFAFA'
    }
})

const HotSelect = () => {
    const hotSelectItem = [
        {name:'轻食'},
        {name:'春日'},
        {name:'早餐'},
        {name:'叮咚特供'},
        {name:'宝妈严选'},
        {name:'春日鲜花'},
    ]
    return (
        <View style={styles.hotSelectContainer}>
            {
               hotSelectItem.map(item=>(
                   <View style={styles.selectItem}>
                       <Text>{item.name}</Text>
                   </View>
               )) 
            }
        </View>
    )
}

export default HotSelect