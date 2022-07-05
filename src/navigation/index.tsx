import React, { FC, useMemo } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../../modules/SettingsScreen';
import { CategoryStack } from './categoryStack';
import { AllFactsView } from '../../modules/facts/ui/allFactsView';
import { FavouritesFactsView } from '../../modules/facts/ui/favouritesFactsView';
import { HomeIcon } from '../../assets/icons/homeIcon';
import { useUiContext } from '../UIProvider';
import { getStyle } from './categoryStack/styles';
import { FavoriteIcon } from '../../assets/icons/FavoriteIcon';
import { StoryIcon } from '../../assets/icons/storyIcon';
import { SettingsIcon } from '../../assets/icons/settingsIcon';

const Tab = createBottomTabNavigator()

export const AppNavigator: FC = () => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} />
            <NavigationContainer >
                <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBarStyle, tabBarActiveTintColor: colors.chosenButton }}>
                    <Tab.Screen name="CATEGORY" options={{ tabBarIcon: (params) => <HomeIcon width={40} height={40} color={params.focused ? colors.chosenButton : undefined} /> }} component={CategoryStack} />
                    <Tab.Screen name="ALL" options={{ tabBarIcon: (params) => <StoryIcon width={30} color={params.focused ? colors.chosenButton : undefined} /> }} component={AllFactsView} />
                    <Tab.Screen name="FAVOURITES" options={{ tabBarIcon: (params) => <FavoriteIcon width={50} color={params.focused ? colors.chosenButton : undefined} /> }} component={FavouritesFactsView} />
                    <Tab.Screen name="SETTINGS" options={{ tabBarIcon: (params) => <SettingsIcon width={40} color={params.focused ? colors.chosenButton : undefined} /> }} component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}
