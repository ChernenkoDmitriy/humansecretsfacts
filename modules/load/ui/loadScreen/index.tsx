import { observer } from 'mobx-react';
import React, { FC, useEffect, useMemo } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUiContext } from '../../../../src/UIProvider';
import { getStyle } from './styles';
import RNBootsplash from 'react-native-bootsplash';
import { appState } from '../../../shared/entities/appState/AppStateController';
import { LogoTextIcon } from '../../../../assets/icons/logoTextIcon';

interface IProps {
}

export const LoadScreen: FC<IProps> = observer(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    useEffect(() => {
        RNBootsplash.hide().then(() => {
            appState.isLoaded = true;
        });
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/icons/splashImg.png')} style={styles.icon}/>
            <LogoTextIcon width={200}/>
        </View>
    );
});
