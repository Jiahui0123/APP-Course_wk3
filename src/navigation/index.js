import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, Pressable, Text } from 'react-native';

import BookScreen from '../screens/BookScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

import active_bookmark from "../image/icon_bookmark_actived.png";
import inactive_bookmark from "../image/icon_bookmark.png";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyDrawer />

        </NavigationContainer>
    );
}

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView{...props}
            contentContainerStyle={{ paddingTop: 40 }}
        >
            <Image
                source={require('../image/img_avatar.png')}
                style={{ marginLeft: 16, marginBottom: 10 }}
            />
            <Text style={{ fontSize: 24, fontWeight: 500, fontFamily: "Roboto", paddingLeft: 16, paddingBottom: 10 }}>May</Text>
            <Text style={{ height: 0, width: '100%', borderWidth: 0.5, borderColor: '#eee' }}></Text>
            <DrawerItemList{...props} />
        </DrawerContentScrollView>
    );
}

const MyDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                drawerActiveBackgroundColor: 'fff',
                drawerActiveTintColor: '#666666',
                drawerInactiveTintColor: '#666666',
                drawerStyle: { width: 250 },
                drawerLabelStyle: { fontSize: 18, fontWeight: '400' },
            }}
            drawerContent={props => <CustomDrawerContent{...props} />}
        >
            <Drawer.Screen
                name="HomeStack"
                component={MyTabs}
                options={{
                    headerShown: false,
                    drawerLabel: "Home",
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Account"
                component={SettingsScreen}
                options={{
                    headerShown: false,
                    drawerLabel: "Account",
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerShown: false,
                    drawerLabel: "Settings",
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

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

const HomeStack = ({ navigation }) => {
    const [PressState, setPressState] = useState(false);
    let bookmark = PressState ? active_bookmark : inactive_bookmark;
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={BookScreen}
                options={{
                    title: " ",
                    headerRight: () => (<Image source={require('../image/icon_search.png')} />),
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={'menu'}
                            size={20}
                            onPress={() => navigation.openDrawer()}
                            style={{ marginRight: 20 }}
                        />
                    )
                }}

            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()}>
                            <MaterialCommunityIcons
                                name={'chevron-left'}
                                size={24}
                            />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable onPress={() => setPressState(!PressState)}>
                            <Image source={bookmark} />
                        </Pressable>
                    ),
                    title: " ",
                }}
            />
        </Stack.Navigator>
    );
};


export default Navigation;