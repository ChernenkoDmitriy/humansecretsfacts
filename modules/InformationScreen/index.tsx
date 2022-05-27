import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useMemo } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getStyle } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
}

export const InformationScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Info Screen</Text>
        </SafeAreaView>
    );
};
