import React from 'react';
import { AppNavigator } from './navigation';
import { UIProvider } from './UIProvider';

export const App = () => {

    return (
        <UIProvider>
            <AppNavigator />
        </UIProvider>
    )
}