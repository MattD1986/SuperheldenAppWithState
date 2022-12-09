import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions } from "react-native";
import Aliases from "../components/Aliases"
import { RelativesInfoList, AffiliationInfoList } from "../components/GeekInfoLists";
import { useTheme } from "@react-navigation/native";
import layout from "../styles/layout";

const GeekInfo = ({ route }) => {

    const { results } = route.params
    const { colors } = useTheme()
    const { name } = results
    const { aliases, ['first-appearance']: firstAppearance } = results.biography
    const { relatives, ['group-affiliation']: affiliation } = results.connections
    const { intelligence, strength, speed, durability, power, combat } = results.powerstats
    const { url: imageUrl } = results.image

    const {
        container,
        heroName,
        leftColumn,
        rightColumn,
        paddingText,
        powerstatsContainer,
        title,
        borderBottom,
        borderTop } = styles

    return (
        <ScrollView style={container} >
            <ImageBackground source={{ uri: imageUrl }} imageStyle={{ opacity: 0.1 }}>
                <View>
                    <Text style={[heroName, { color: colors.text }]}> {name} </Text>
                    <Aliases>{aliases}</Aliases>
                </View>
                <View style={[{ flexDirection: layout.CREATE_ROW }, { marginTop: 20 }]} >
                    <Text style={[leftColumn, paddingText, { color: colors.text }]}>first appearance</Text>
                    <Text style={[rightColumn, paddingText, { color: colors.text }]}>{firstAppearance}</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={[paddingText, { fontWeight: 'bold' }, { color: colors.text }]}>
                        relatives
                    </Text>
                    <RelativesInfoList>{relatives}</RelativesInfoList>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={[paddingText, { fontWeight: 'bold' }, { color: colors.text }]}>
                        affiliated to
                    </Text>
                    <AffiliationInfoList>{affiliation}</AffiliationInfoList>
                </View>

                <View style={powerstatsContainer}>
                    <Text style={[title, { color: colors.text }]}>Powerstats</Text>
                    <View style={[{ flexDirection: layout.CREATE_ROW }, { marginHorizontal: 10 }]}>
                        <Text style={[borderTop, { color: layout.POWERSTATS_INTELLIGENCE, borderColor: colors.border }]}>intelligence</Text>
                        <Text style={[borderTop, { color: layout.POWERSTATS_STRENGTH, borderColor: colors.border }]}>strength</Text>
                        <Text style={[borderTop, { color: layout.POWERSTATS_SPEED, borderColor: colors.border }]}>speed</Text>
                    </View>
                    <View style={[{ flexDirection: layout.CREATE_ROW }, { marginHorizontal: 10 }]}>
                        <Text style={[borderBottom, { color: layout.POWERSTATS_INTELLIGENCE, borderColor: colors.border }]}>{intelligence}</Text>
                        <Text style={[borderBottom, { color: layout.POWERSTATS_STRENGTH, borderColor: colors.border }]}>{strength}</Text>
                        <Text style={[borderBottom, { color: layout.POWERSTATS_SPEED, borderColor: colors.border }]}>{speed}</Text>
                    </View>
                    <View style={[{ flexDirection: layout.CREATE_ROW }, { marginHorizontal: 10 }, { marginTop: 5 }]}>
                        <Text style={[borderTop, { color: layout.POWERSTATS_DURABILITY, borderColor: colors.border }]}>durability</Text>
                        <Text style={[borderTop, { color: layout.POWERSTATS_POWER, borderColor: colors.border }]}>power</Text>
                        <Text style={[borderTop, { color: layout.POWERSTATS_COMBAT, borderColor: colors.border }]}>combat</Text>
                    </View>
                    <View style={[{ flexDirection: layout.CREATE_ROW }, { marginHorizontal: 10 }]}>
                        <Text style={[borderBottom, { color: layout.POWERSTATS_DURABILITY, borderColor: colors.border }]}>{durability}</Text>
                        <Text style={[borderBottom, { color: layout.POWERSTATS_POWER, borderColor: colors.border }]}>{power}</Text>
                        <Text style={[borderBottom, { color: layout.POWERSTATS_COMBAT, borderColor: colors.border }]}>{combat}</Text>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
    },
    heroName: {
        marginTop: 20,
        paddingLeft: 20,
        fontSize: 30,
        fontWeight: 'bold',
    },
    leftColumn: {
        fontWeight: 'bold',
        flex: 1
    },
    rightColumn: {
        flex: 2,
        paddingRight: 10
    },
    paddingText: {
        paddingLeft: 20
    },
    powerstatsContainer: {
        marginTop: 30,
        marginHorizontal: 20,
        marginBottom: 40
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    borderBottom: {
        borderWidth: 1,
        borderTopWidth: 0,
        textAlign: 'center',
        flex: 1
    },
    borderTop: {
        borderWidth: 1,
        borderBottomWidth: 0,
        textAlign: 'center',
        flex: 1
    },
    relative: {
        paddingLeft: 30
    },
})

export default GeekInfo