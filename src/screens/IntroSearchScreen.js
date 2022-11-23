import React, { useState, useEffect } from "react";
import { Button, TextInput, View, ActivityIndicator, Dimensions, StyleSheet, Image, Text, ScrollView } from "react-native";
import { getData } from "../utils/SuperHeroApi";
import { Feedback } from "../components/FeedBack";
import { useTheme } from "@react-navigation/native";
import layout from "../styles/layout";

const Search = ({navigation}) =>{

    const [searchString, setSearchString] = useState('')
    const [isLoading, setIsLoading]= useState(false)
    const [message, setMessage] = useState('')  

    const onSearchPressed = () => {
        setIsLoading(true)

        getData(searchString)
            .then(response => {
                handleResponse(response);
            })
            .catch(error => {
                setIsLoading(false)
                setMessage(`Door een fout kon de data niet opgehaald worden: ${error}`)
            });
    }
    
    const handleResponse = (response) =>{
        setIsLoading(false)

        if(response.results && response.results.length > 1) {
            navigation.navigate('Multiple', {
                results : response.results 
            });
            setSearchString('')
        } else if(response.results && response.results.length == 1){
            // naar Details pagina --> in de lijst zit maar één item, dus kan hardcoded naar eerste positie (= index 0)
            navigation.navigate('Hero Information', {
                results : response.results[0],                
            })
            setSearchString('')
        } else {
            setMessage('We searched the multiverse, the realm of the gods and even the hidden files of Marvel and DC.. no hero like this could be found')
        }

    }
    
    const { colors } = useTheme()
    const { container, image, header, searchFieldContainer, buttonContainer, plainText, searchText } = styles
    const spinner = isLoading ? (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator size="large" />
        </View>
      ) : null;


    return(

    <ScrollView style={[container, {backgroundColor: colors.background}]}>
           <View style={{flex:1}}>
           <View>
                <Image source={require('../../assets/superheros.png')} style = { image } resizeMode='cover' />
            </View>
            <View>
                <Text style={[header, {color: colors.text}]}>
                    All heroes .. one click away!
                </Text>
                <Text style={plainText}>
                    Can't choose between Marvel, DC Comics or other superheroes?  No problem! {'\n'}Here you find all heroes in one place. 
                </Text>
            </View>
            <View style={{flexDirection:layout.CREATE_ROW}}>
                <View style={searchFieldContainer}>
                    <TextInput 
                        style = {[searchText, {color: colors.text}]}
                        placeholder="naam held"
                        placeholderTextColor={layout.PLACEHOLDER_COLOR}
                        cursorColor='purple'
                        textAlign='center'
                        value={searchString}
                        onChangeText={text => setSearchString(text)}
                    />
                </View>
                <View style = {buttonContainer}>
                    <Button onPress={onSearchPressed} title="Zoek !" />
                </View>
            </View>
            {spinner}
            <Feedback>{message}</Feedback>
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({

    container:{
        flex: 1,        
    },    
    image:{
        height: Dimensions.get('window').height/3,
        width: Dimensions.get('window').width
    },
    header:{
        paddingTop: 30,
        fontSize: 25,
        fontStyle: "bolt",
        paddingBottom: 30,
        textAlign: 'center'
    },
    searchFieldContainer:{
        flex: 4
    },
    searchText:{
      borderColor: "#048CFA" ,
      borderWidth: 1,
      height: 36,
      padding: 4,
      marginHorizontal: 20,
      
    },
    buttonContainer:{
        flex: 1,
        marginRight: 20,
    },
    plainText:{
        fontStyle: 'italic',
        color: '#B3B1B2',  
        paddingBottom:40,
        marginHorizontal: 25,
        textAlign: 'center'
    },
    textColor:{
    }
})

export default Search