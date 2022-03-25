import React from 'react'
import SearchItemBar from './SearchItemBar'
import HotSelect from './HotSelect'
import BannerCarousel from './BannerCarousel'
import CategoryBar from './CategoryBar'
import { StyleSheet,View } from 'react-native'

const styles = StyleSheet.create({
    topMargin:{
        marginTop:50
    }
})

const Home = () => {
    return (
        <View>
            <View style={styles.topMargin}>
                <SearchItemBar />
            </View>
            <View style={{marginTop:10}}>
                <HotSelect />
            </View>
            <View style={{marginTop:10}}>
                <BannerCarousel />
            </View>
            <CategoryBar />
        </View>
    )
}

export default Home