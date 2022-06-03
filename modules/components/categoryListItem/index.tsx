import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { factsModel } from '../../../src/entities/facts/facts';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    item: string,
    navigation: StackNavigationProp<any>
}

export const CategoryListItem: FC<IProps> = observer(({ item, navigation }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onPress = () => {
        factsModel.category = item
        navigation.navigate('CURRENT_FACT', { facts: factsModel.facts, index: factsModel.factsByCategory })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text>{t(item)}</Text>
        </TouchableOpacity>
    );
});

