import React, { useState, useContext } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { ThemeContext } from "../utils/ThemeContext";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import layout from "../styles/layout";
import { ToastContext } from "../utils/ToastContext";




const Settings = () => {

    const [belovedHero, setBelovedHero] = useState('');
    const { show } = useContext(ToastContext)

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@storage_Key', value)

        } catch (err) {
            console.log(`we couldn't save due to the error: ${err}`)
        }
        setBelovedHero('')
        show({ message: `${value} was saved as favorite hero` })
    }

    const clearData = async () => {
        try {
            await AsyncStorage.removeItem('@storage_Key')

        } catch (err) {
            console.log(`we couldn't save due to the error: ${err}`)
        }
        show({ message: `your favorite hero was deleted` })
    }

    const { colors } = useTheme()
    const { setTheme, theme } = React.useContext(ThemeContext);
    const { title, textInput } = styles

    return (
        <View style={{ marginTop: 20, paddingHorizontal: 30, flex: 1 }} >
            <View>
                <Text style={[title, { color: colors.text, borderBottomColor: colors.border }]}>
                    Theme
                </Text>
                <Button style={{ marginTop: 20 }}
                    title={theme === 'dark' ? 'activate light mode' : 'activate dark mode'}
                    onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            </View>

            <View style={{ marginTop: 40 }}>
                <Text style={[title, { color: colors.text, borderBottomColor: colors.border }]}>
                    Favorite Hero
                </Text>
                <View style={{ flexDirection: layout.CREATE_ROW }}>
                    <View style={{ flex: 4 }}>
                        <TextInput
                            style={[textInput, { color: colors.text }]}
                            placeholder='Enter your preferred hero'
                            placeholderTextColor={layout.PLACEHOLDER_COLOR}
                            value={belovedHero}
                            onChangeText={hero => setBelovedHero(hero)}>
                        </TextInput>
                    </View>
                    <View>
                        <Button style={{ flex: 1 }}
                            onPress={() => storeData(belovedHero)}
                            title="Save"
                        />
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Button
                    onPress={() => clearData()}
                    title="Remove the preferred hero"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        borderBottomWidth: 1,
        marginBottom: 20
    },
    textInput: {
        padding: 10,
        borderColor: "#048CFA",
        borderWidth: 1,
        marginEnd: 10,
        height: 36
    }
})

export default Settings