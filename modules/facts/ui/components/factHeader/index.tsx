import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { factsModel } from '../../../../shared/entities/facts/FactsModel';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';
import { useFacts } from '../../../presenter/useFacts';
import { IFact } from '../../../../shared/entities/facts/IFact';
import { HomeIcon } from '../../../../../assets/icons/homeIcon';
import { FavoriteIcon } from '../../../../../assets/icons/favoriteIcon';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface IProps {
    item: IFact,
    factsLength: number
}

export const FactHeader: FC<IProps> = observer(({ item, factsLength }) => {
    const { colors } = useUiContext();
    const navigation = useNavigation<NavigationProp<any>>();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { setFavoriteFacts } = useFacts()

    const onPressFavorites = useCallback(() => { setFavoriteFacts(item.id) }, [item.id]);

    const goHome = useCallback(() => { navigation.navigate('CATEGORY_SCREEN') }, [navigation]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goHome}>
                <HomeIcon color={colors.regularText} />
            </TouchableOpacity>
            <Text style={styles.text}>{factsModel.lastIndex + 1}/{factsLength}</Text>
            <TouchableOpacity onPress={onPressFavorites}>
                <FavoriteIcon color={item.isFavorite ? colors.chosenButton : colors.regularText} width={40} height={40} />
            </TouchableOpacity>
        </View>
    );
});

