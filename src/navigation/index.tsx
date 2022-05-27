import React, { FC } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../../modules/MainScreen';
import { InformationScreen } from '../../modules/InformationScreen';
import { FactsListScreen } from '../../modules/FactsListScreen';
import { FactScreen } from '../../modules/FactScreen';

const Stack = createStackNavigator();

export const AppNavigator: FC = () => {

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <StatusBar backgroundColor={'#000'} />
            <NavigationContainer theme={{ colors: {} } as any}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="MAIN" component={MainScreen} initialParams={{ screenName: "main" }} />
                    <Stack.Screen name="RECENTLY_READ" component={FactScreen} initialParams={{ screenName: "RECENTLY_READ" }} />
                    <Stack.Screen name="ALL_FACTS" component={FactsListScreen} initialParams={{ screenName: "ALL_FACTS" }} />
                    <Stack.Screen name="UNREAD_FACTS" component={FactsListScreen} initialParams={{ screenName: "UNREAD_FACTS" }} />
                    <Stack.Screen name="READ_FACTS" component={FactsListScreen} initialParams={{ screenName: "READ_FACTS" }} />
                    <Stack.Screen name="FAVORITES_FACTS" component={FactsListScreen} initialParams={{ screenName: "FAVORITES_FACTS" }} />
                    <Stack.Screen name="CURRENT_FACT" component={FactScreen} initialParams={{ screenName: "CURRENT_FACT" }} />
                    <Stack.Screen name="INFORMATION" component={InformationScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
