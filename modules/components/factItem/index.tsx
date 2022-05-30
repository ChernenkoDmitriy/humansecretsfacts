import React, { FC, useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    item: any
}

export const FactItem: FC<IProps> = ({ item }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
        </ScrollView>
    );
};

