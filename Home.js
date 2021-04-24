import React, { useEffect, useState } from 'react'
import {
    View, SafeAreaView, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, ActivityIndicator
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    titleBox: {
        padding: 10
    }
})

export default function Home({ navigation }) {
    const [songs, setSongs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://itunes.apple.com/search?term=Michael+jackson")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoading(false)
                setSongs(data["results"])
            })
    }, [])

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            onPress={() => navigation.navigate("Detail", {item: item, title: item.trackName })} style={{ flexDirection: "row", padding: 5 }}>
            <View>
                <Image source={{ uri: item.artworkUrl100 }} style={{ width: 80, height: 80, marginRight: 10 }} />
            </View>
            <View>
                <Text style={{ fontWeight: "bold" }}>{item.trackName ? item.trackName : "No title"}</Text>
                <Text>{item.artistName}</Text>
            </View>
        </TouchableOpacity>
    )

    const separator = () => (
        <View style={{ height: 0.5, width: "100%", backgroundColor: "rgba(0,0,0,0.5)" }} />
    )

    if(loading) {
        return(
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleBox}>

                <FlatList
                    data={songs}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.trackId}
                    ItemSeparatorComponent={separator}
                />
            </View>
        </SafeAreaView>
    )
}