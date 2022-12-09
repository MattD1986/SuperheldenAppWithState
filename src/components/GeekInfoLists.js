import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { toRegexifiedAffiliationsArray, toRegexifiedRelativesArray } from "../utils/convertToArray";

export const RelativesInfoList = ({ children }) => {

    const { colors } = useTheme()

    return (
        <View>
            {toRegexifiedRelativesArray(children).map((item, key) => (
                <Text style={[styles.relative, { color: colors.text }]} key={key}> * {item.trim()}</Text>
            ))}
        </View>
    )
}

export const AffiliationInfoList = ({ children }) => {

    const { colors } = useTheme()
    return (
        <View>
            {toRegexifiedAffiliationsArray(children).map((item, key) => (
                <Text style={[styles.relative, { color: colors.text }]} key={key}> * {item.trim()}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    relative: {
        paddingLeft: 30,
    }
})


/** Code hier in comment om uit te leggen waarom niet gebruikt
 * 
 * gebruik flatlist niet mogelijk omdat deze in een scrollview komt te staan;  het werkt wel, maar in expo app komt er een foutmelding
    omdat geneste flatlist in scrollview niet mag

<FlatList
    data={toRegexifiedRelativesArray(children)}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({item})=><Text style={styles.relative}> * {item}</Text>}
    >
</FlatList>


<FlatList
    data={toRegexifiedAffiliationsArray(children)}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({item})=><Text style={styles.relative}> * {item}</Text>}
    >
</FlatList>
)
 
*/