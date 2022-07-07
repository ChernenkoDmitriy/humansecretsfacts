import React from 'react';
import { AppNavigator } from './navigation/tabNavigator';
import { UIProvider } from './UIProvider';

export const App = () => {

    return (
        <UIProvider>
            <AppNavigator />
        </UIProvider>
    )
}