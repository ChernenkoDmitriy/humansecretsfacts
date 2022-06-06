import React, { FC } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../../modules/SettingsScreen';
import { CategoryStack } from './categoryStack';
import { AllFactsView } from '../../modules/facts/ui/allFactsView';
import { FavouritesFactsView } from '../../modules/facts/ui/favouritesFactsView';

const Tab = createBottomTabNavigator()

export const AppNavigator: FC = () => {

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <StatusBar backgroundColor={'#000'} />
            <NavigationContainer theme={{ colors: {} } as any}>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="CATEGORY" component={CategoryStack} />
                    <Tab.Screen name="ALL" component={AllFactsView} />
                    <Tab.Screen name="FAVOURITES" component={FavouritesFactsView} />
                    <Tab.Screen name="SETTINGS" component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}
