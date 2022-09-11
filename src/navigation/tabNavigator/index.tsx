import React, { FC, useMemo } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../../../modules/SettingsScreen';
import { CategoryStack } from '../categoryStack';
import { AllFactsView } from '../../../modules/facts/ui/allFactsView';
import { HomeIcon } from '../../../assets/icons/homeIcon';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import { SettingsIcon } from '../../../assets/icons/settingsIcon';
import { StoryIcon } from '../../../assets/icons/storyIcon';
import { FavoriteIcon } from '../../../assets/icons/favoriteIcon';
import { FavoritesFactsView } from '../../../modules/facts/ui/favoritesFactsView';
import { appState } from '../../../modules/shared/entities/appState/AppStateController';
import { observer } from 'mobx-react';

const Tab = createBottomTabNavigator()

export const AppNavigator: FC = observer(() => {
    const { colors, theme } = useUiContext();
    const styles = useMemo(() => getStyle(colors, appState.isLoaded), [colors, appState.isLoaded]);

    const barStyle = useMemo(() => theme === 'light' ? 'dark-content' : 'light-content', [theme]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle={barStyle} />
            <NavigationContainer >
                <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBarStyle}}>
                    <Tab.Screen name="CATEGORY" options={{ tabBarIcon: (params) => <HomeIcon width={40} height={40} color={params.focused ? colors.chosenButton : undefined} /> }} component={CategoryStack} />
                    <Tab.Screen name="ALL" options={{ tabBarIcon: (params) => <StoryIcon width={30} color={params.focused ? colors.chosenButton : undefined} /> }} component={AllFactsView} />
                    <Tab.Screen name="FavoriteS" options={{ tabBarIcon: (params) => <FavoriteIcon width={50} height={50} color={params.focused ? colors.chosenButton : undefined} /> }} component={FavoritesFactsView} />
                    <Tab.Screen name="SETTINGS" options={{ tabBarIcon: (params) => <SettingsIcon width={40} color={params.focused ? colors.chosenButton : undefined} /> }} component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
});
