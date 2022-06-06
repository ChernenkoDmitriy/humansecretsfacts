import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CategoryScreen } from '../../../modules/CategoryScreen';
import { CategoryFactsView } from '../../../modules/facts/ui/categoryFactsView';

const Stack = createStackNavigator();

export const CategoryStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CATEGORY_SCREEN" component={CategoryScreen} />
            <Stack.Screen name="CATEGORY_FACTS" component={CategoryFactsView} />
        </Stack.Navigator>
    );
}