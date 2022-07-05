import { NavigationProp, useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { categoryImgMock } from '../../../../MOCKS/cardImgMock';
import { useUiContext } from '../../../../src/UIProvider';
import { factsModel } from '../../../shared/entities/facts/FactsModel';
import { getStyle } from './styles';

interface IProps {
    item: string,
}

export const CategoryListItem: FC<IProps> = observer(({ item, }) => {
    const navigation: NavigationProp<any> = useNavigation();
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onPress = useCallback(() => {
        factsModel.setLastIndexByCategory(item);
        navigation.navigate('CATEGORY_FACTS');
    }, []);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {categoryImgMock[item] || null}
            <Text style={styles.text}>{t(item)}</Text>
        </TouchableOpacity>
    );
});

