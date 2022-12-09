import { useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, Image, StyleSheet, View, Dimensions, Button } from "react-native";
import layout from "../styles/layout";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Detail = ({ route, navigation }) => {
    const { results } = route.params
    const [savedHero, setSavedHero] = useState('')

    useEffect(() => {
        const readData = async () => {
            try {
                const value = await AsyncStorage.getItem('@storage_Key')
                console.log('in effect')
                if (value !== null) {
                    setSavedHero(value)
                }
            } catch (err) {
                console.log(`we couldn't restore anything due to the error: ${err}`)
            }
        }
        readData()
    }, []);

    const { colors } = useTheme()
    const {
        container, image, heroName, heroRealName,
        appearanceContainer, appearanceStyle, leftColumn, rightColumn, settingsColumn } = styles

    const { name } = results
    const { gender, height, weight, race, ['eye-color']: eyeColor, ['hair-color']: hairColor } = results.appearance
    const { publisher, ['full-name']: fullname, ['place-of-birth']: placeBirth } = results.biography
    const { occupation } = results.work
    const { url: imageUrl } = results.image

    const heart = (savedHero.toLowerCase() === name.toLowerCase()) ? (<Image source={require('../../assets/heart2.png')} style={{ height: 40, width: 40, marginTop: 20, marginStart: 10 }} />) : null

    return (
        <ScrollView style={[container, { backgroundColor: colors.background }]}>
            <View style={{ backgroundColor: layout.COLOR_BACKGROUND_PICTURE }}>
                <Image style={image} source={{ uri: imageUrl }} />
            </View>
            <View>
                <View style={[leftColumn, { flexDirection: layout.CREATE_ROW, flex: 2 }]}>
                    <Text style={[heroName, { color: colors.text }]}>{name}</Text>
                    {heart}
                </View>

                <View style={[{ position: 'absolute' }, { right: 10 }, { top: -12 }]}>
                    <Button
                        title="Stats for Geeks"
                        onPress={() => navigation.navigate('Real superhero secrets', { results: results })} />
                </View>
            </View>
            <View>
                <Text style={[heroRealName, { color: colors.text }]}> &#40; {fullname} &#41;</Text>
            </View>
            <View>
                <View style={appearanceContainer} >
                    <Text style={[appearanceStyle, { color: colors.text }]}>Appearance </Text>
                    <View style={{ flexDirection: layout.CREATE_ROW }}>
                        <Text style={[leftColumn, settingsColumn, { color: colors.text }]}> Gender </Text>
                        <Text style={[rightColumn, settingsColumn, { color: colors.text }]}> {gender} </Text>
                    </View>
                    <View style={{ flexDirection: layout.CREATE_ROW }}>
                        <Text style={[leftColumn, settingsColumn, { color: colors.text }]}> Race </Text>
                        <Text style={[rightColumn, settingsColumn, { color: colors.text }]}> {race} </Text>
                    </View>
                    <View style={{ flexDirection: layout.CREATE_ROW }}>
                        <Text style={[leftColumn, settingsColumn, { color: colors.text }]}> Height </Text>
                        <Text style={[rightColumn, settingsColumn, { color: colors.text }]}> {height[1]} </Text>
                    </View>
                    <View style={{ flexDirection: layout.CREATE_ROW }}>
                        <Text style={[leftColumn, settingsColumn, { color: colors.text }]}> Weight </Text>
                        <Text style={[rightColumn, settingsColumn, { color: colors.text }]}> {weight[1]} </Text>
                    </View>
                    <View style={{ flexDirection: layout.CREATE_ROW }}>
                        <Text style={[leftColumn, settingsColumn, { color: colors.text }]}> Eyes </Text>
                        <Text style={[rightColumn, settingsColumn, { color: colors.text }]}> {eyeColor} </Text>
                    </View>
                    <View style={{ flexDirection: layout.CREATE_ROW }}>
                        <Text style={[leftColumn, settingsColumn, { color: colors.text }]}> Hair </Text>
                        <Text style={[rightColumn, settingsColumn, { color: colors.text }]}> {hairColor} </Text>
                    </View>
                </View>
                <View style={appearanceContainer} >
                    <Text style={[appearanceStyle, { color: colors.text }]}>Personal info </Text>
                    <View style={{ flexDirection: layout.CREATE_ROW }}>
                        <Text style={[leftColumn, settingsColumn, { color: colors.text }]}> Place of birth </Text>
                        <Text style={[rightColumn, settingsColumn, { color: colors.text }]}> {placeBirth} </Text>
                    </View>
                    <View style={{ flexDirection: layout.CREATE_ROW }}>
                        <Text style={[leftColumn, settingsColumn, { color: colors.text }]}> Work </Text>
                        <Text style={[rightColumn, settingsColumn, { color: colors.text }]}> {occupation} </Text>
                    </View>
                    <View style={[{ flexDirection: layout.CREATE_ROW }, { marginBottom: 40 }]}>
                        <Text style={[leftColumn, settingsColumn, { color: colors.text }]}> Publisher </Text>
                        <Text style={[rightColumn, settingsColumn, { color: colors.text }]}> {publisher} </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        marginVertical: 10,
        borderRadius: 500,
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width / 3 * 2,
        alignSelf: 'center'
    },
    heroName: {
        marginTop: 20,
        paddingLeft: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    heroRealName: {
        paddingLeft: 40,
        fontSize: 20,
        fontStyle: 'italic'
    },
    appearanceContainer: {
        marginTop: 20,
        paddingLeft: 30,
    },
    appearanceStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    leftColumn: {
        fontWeight: 'bold',
        flex: 1
    },
    rightColumn: {
        flex: 2,
        paddingRight: 15
    },
    settingsColumn: {
        paddingTop: 5,
        paddingLeft: 15,
    }
})

export default Detail