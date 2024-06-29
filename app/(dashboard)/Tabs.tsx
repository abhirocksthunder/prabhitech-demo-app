import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from ".";
import Profile from "./Profile";
import AddDailyHelp from "./AddDailyHelp";
import { Icon } from "@rneui/base";
import Community from "./Community";
import Homes from "./Homes";
import BuynSell from "./BuynSell";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Social') {
                        return <Icon name={'social-delicious'} type="foundation" size={size} color={color} />;
                    } else if (route.name === 'Community') {
                        return <Icon name={'home-city-outline'} type="material-community" size={size} color={color} />;
                    } else if (route.name === 'Homes') {
                        return <Icon name={'home'} type="foundation" size={size} color={color} />;
                    }
                    else if (route.name === 'Buy&Sell') {
                        return <Icon name={'sell'} type="material" size={size} color={color} />;
                    } else if (route.name === 'Profile') {
                        iconName = 'person';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName as any} size={size} color={color} />;
                },
                headerShown: false
            })}
        >
            <Tab.Screen name="Social" component={Dashboard} />
            <Tab.Screen name="Community" component={Community} />
            <Tab.Screen name="Homes" component={Homes} />
            <Tab.Screen name="Buy&Sell" component={BuynSell} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default MainTabs;