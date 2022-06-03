import React, { FC } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../../modules/MainScreen';
// import { InformationScreen } from '../../modules/InformationScreen';
import { FactsListScreen } from '../../modules/FactsListScreen';
import { FactScreen } from '../../modules/FactScreen';
import { SettingsScreen } from '../../modules/SettingsScreen';
import { InformationScreen } from '../../modules/InformationScreen';

const Stack = createStackNavigator();

export const AppNavigator: FC = () => {

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <StatusBar backgroundColor={'#000'} />
            <NavigationContainer theme={{ colors: {} } as any}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="MAIN" component={MainScreen} />
                    <Stack.Screen name="RECENTLY_READ" component={FactScreen} />
                    <Stack.Screen name="FAVORITES_FACTS" component={FactScreen} />
                    <Stack.Screen name="CURRENT_FACT" component={FactScreen} />
                    <Stack.Screen name="SETTINGS" component={SettingsScreen} />
                    <Stack.Screen name="INFORMATION" component={InformationScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
