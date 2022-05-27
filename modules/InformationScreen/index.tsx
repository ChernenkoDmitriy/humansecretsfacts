import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useUiContext } from '../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
}

export const InformationScreen: FC<IProps> = observer(({ navigation }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Info Screen</Text>
        </SafeAreaView>
    );
});
