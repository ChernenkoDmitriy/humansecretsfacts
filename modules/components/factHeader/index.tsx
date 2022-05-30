import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
    allFacts: number;
    currentViewFact: number;
}

export const FactHeader: FC<IProps> = ({ navigation, allFacts, currentViewFact }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigation.goBack}>
                <Text>{'<'}</Text>
            </TouchableOpacity>
            <Text>{currentViewFact + 1}/{allFacts}</Text>
            <TouchableOpacity>
                <Text>Fav</Text>
            </TouchableOpacity>
        </View>
    );
};

