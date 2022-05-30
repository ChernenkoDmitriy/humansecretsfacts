import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    item: any,
    navigation: StackNavigationProp<any>
}

export const CategoryListItem: FC<IProps> = ({ item, navigation }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('CURRENT_FACT')}>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    );
};

