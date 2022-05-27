import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useUiContext } from '../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
    route: NavigatorScreenParams<{ params: { screenName: string } }>
}

export const FactsListScreen: FC<IProps> = observer(({ navigation, route }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <SafeAreaView style={styles.container}>
            <Text>{route.params?.screenName}</Text>
        </SafeAreaView>
    );
});
