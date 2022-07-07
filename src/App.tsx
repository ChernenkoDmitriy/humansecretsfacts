import React, { useEffect } from 'react';
import { AppNavigator } from './navigation';
import { UIProvider } from './UIProvider';
import RNBootsplash from 'react-native-bootsplash'

export const App = () => {

    useEffect(() => { setTimeout(() => RNBootsplash.hide(), 1000) }, []);

    return (
        <UIProvider>
            <AppNavigator />
        </UIProvider>
    )
}