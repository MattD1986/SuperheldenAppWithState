import React, { useState } from "react";
import { NavigationContainer, DarkTheme, DefaultTheme} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Results from "../screens/MultipleResults";
import GeekInfo from "../screens/GeekInfo";
import Settings from "../screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fontisto, SimpleLineIcons } from '@expo/vector-icons';
import { useColorScheme } from "react-native";
import Search from "../screens/IntroSearchScreen";
import { ThemeContext } from "../utils/ThemeContext";
import Detail from "../screens/Detail";

const Stack = createNativeStackNavigator();

export function StackNavigator(){
    return(
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Search} />
                <Stack.Screen name='Hero Information' component={Detail} />
                <Stack.Screen name='Multiple' component={Results}/>
                <Stack.Screen name='Real superhero secrets' component={GeekInfo}/>
            </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();


export function TabNavigator(){

    //controleert het thema van de browser
    const scheme = useColorScheme();  // -> haalt het thema op volgens de brouwservoorkeur (startsituatie)
    const [theme, setTheme] = useState(scheme)   // -> laadt het thema van de browser in en geeft de mogelijkheid dit te wijzigen
    const themeData = {theme, setTheme}

    return(
        <ThemeContext.Provider value = {themeData}>
        <NavigationContainer theme={theme === 'dark' ? DarkTheme:DefaultTheme}>
            <Tab.Navigator>
                <Tab.Screen name = 'home' component={StackNavigator} options={{tabBarLabel: 'Search', tabBarIcon: ({ color, size}) => (<Fontisto name = 'search' color={color} size={size} />), headerShown: false}} />
                <Tab.Screen name = 'Settings' component={Settings} options={{tabBarLabel: 'Settings', tabBarIcon: ({ color, size}) =>(<SimpleLineIcons name="settings" size={size} color={color} />)}} />
            </Tab.Navigator>
        </NavigationContainer>
        </ThemeContext.Provider>
    )
}

