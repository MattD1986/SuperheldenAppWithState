import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Aliases = ({ children }) => {

    const { colors } = useTheme()

    return (
        <View style={[styles.aliases, { color: colors.text }]}>
            <Text style={[styles.text, { color: colors.text }]}>&#40;a.k.a. </Text>

            {children.map((item, key) => (

                <Text style={[styles.text, { color: colors.text }]} key={key} >{item + (key < children.length - 1 ? ', ' : '')} </Text>
            ))}

            <Text style={[styles.text, { color: colors.text }]}> &#41; </Text>
        </View>
    )
}

export default Aliases;

const styles = StyleSheet.create({
    aliases: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 50,
        paddingRight: 25
    },
    text: {
        fontSize: 15,
        fontStyle: 'italic'
    }
})