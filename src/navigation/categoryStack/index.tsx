import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { CategoryFactsView } from '../../../modules/facts/ui/categoryFactsView';
import { LoadScreen } from '../../../modules/load/ui/loadScreen';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
import { CategoryScreen } from '../../../modules/Categorys/ui/CategoryScreen';

const Stack = createStackNavigator();

const config: TransitionSpec = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 5000,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const forFade: StackNavigationOptions = {
    transitionSpec: {
        open: config,
        close: config,
    },
    cardStyleInterpolator: ({ current }) => {
        return {
            cardStyle: {
                opacity: current.progress,
            },
        };
    }
};

export const CategoryStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"LOAD_SCREEN"}>
            <Stack.Screen options={{ ...forFade }} name="LOAD_SCREEN" component={LoadScreen} />
            <Stack.Screen options={{ ...forFade }} name="CATEGORY_SCREEN" component={CategoryScreen} />
            <Stack.Screen name="CATEGORY_FACTS" component={CategoryFactsView} />
        </Stack.Navigator>
    );
}