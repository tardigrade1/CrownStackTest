import React, { useEffect } from 'react'
import {
    View, Text, StyleSheet, Image, SafeAreaView
} from 'react-native'

import record from './assets/record.png'
import price from './assets/price.png'
import mic from './assets/mic.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
})

export default function Detail({ route, navigation }) {
    const {item} = route.params
    useEffect(() => {
        navigation.setOptions({
            title: item.trackName ? item.trackName : "No Title"
        })
    }, [])
    return(
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Image source={{ uri: item.artworkUrl100 }} style={{ flex: 2, aspectRatio: 1 }} />
                <View style={{ flex: 4, paddingLeft: 10 }}>
                    <Text style={{ fontWeight: "bold", flexWrap: 'wrap', fontSize: 18, marginBottom: 5 }}>{item.trackName ? item.trackName : "No title"}</Text>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                        <Image source={record} style={{ width: 20, height: 20, marginRight: 5 }} />
                        <Text style={{ flex: 1 }}>{item.collectionName}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                        <Image source={price} style={{ width: 20, height: 20, marginRight: 5 }} />
                        <Text>${item.collectionPrice}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={mic} style={{ width: 20, height: 20, marginRight: 5 }} />
                        <Text style={{ flex: 1 }}>{item.artistName}</Text>
                    </View>
                </View>
            </View>

            {/* <View>
                <Text>{item.description}</Text>
            </View> */}
        </SafeAreaView>
    )
}