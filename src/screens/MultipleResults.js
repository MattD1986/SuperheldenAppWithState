import React from "react";
import { FlatList, Text, StyleSheet, View, Dimensions } from "react-native";
import { useTheme } from "@react-navigation/native";

const Results = ({ route, navigation }) => {
    const { results } = route.params;
    const { colors } = useTheme()
    const { flatlist, container } = styles

    return (
        <View style={container} >
            <FlatList
                style={flatlist}
                data={results}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Text
                        style={[styles.input, { color: colors.text, borderColor: colors.border }]}
                        onPress={() => navigation.navigate('Hero Information', { results: results[index] })}>
                        {item.name}
                    </Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        display: 'flex'
    },
    flatlist: {
        marginVertical: 40
    },
    input: {
        textAlign: "center",
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        margin: 5,
        width: Dimensions.get('window').width - 20
    }
})

export default Results