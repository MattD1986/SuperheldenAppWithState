import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Feedback = ({children}) => {
    if(children !== ''){
        return (
            <View>
                <Text style={styles.feedback}>{children}</Text>
            </View>
        );
    }
    return null;
};


const styles = StyleSheet.create({
    feedback:{
        margin: 20,
        padding: 5,
        color: 'red',
        textAlign: 'center'
    }
})