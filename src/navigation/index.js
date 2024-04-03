import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Pressable } from 'react-native';

import BookScreen from '../screens/BookScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
};

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveTintColor: "#6200EE",
                tabBarInactiveTintColor: "#666666"
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title: "Home",
                    headerTitleStyle: {
                        fontSize: 14,
                        fontWeight: '400'
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    )
                }} />
            <Tab.Screen
                name="Wishlist"
                component={SettingsScreen}
                options={{
                    title: "Wishlist",
                    headerTitleStyle: {
                        fontSize: 14,
                        fontWeight: '400'
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookmark" color={color} size={30} />
                    )
                }} />
            <Tab.Screen
                name="MyBook"
                component={SettingsScreen}
                options={{
                    title: "MyBook",
                    headerTitleStyle: {
                        fontSize: 14,
                        fontWeight: '400'
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-open" color={color} size={30} />
                    )
                }} />
        </Tab.Navigator>
    );
}

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={BookScreen}
                options={{
                    headerRight: () => (<Image source={require('../image/icon_search.png')} />)
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    headerRight: () => (
                        <Pressable>
                            <Image
                                source={require('../image/icon_bookmark.png')}
                            />
                        </Pressable>
                    ),
                    title: " ",
                }}
            />
        </Stack.Navigator>
    );
};


export default Navigation;