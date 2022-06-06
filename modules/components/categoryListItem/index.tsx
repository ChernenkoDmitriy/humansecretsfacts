import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { factsModel } from '../../shared/entities/facts/FactsModel';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    item: string,
    navigation: StackNavigationProp<any>
}

export const CategoryListItem: FC<IProps> = observer(({ item, navigation }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onPress = useCallback(() => {
        factsModel.setLastIndexByCategory(item);
        navigation.navigate('CATEGORY_FACTS');
    }, []);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{t(item)}</Text>
        </TouchableOpacity>
    );
});

