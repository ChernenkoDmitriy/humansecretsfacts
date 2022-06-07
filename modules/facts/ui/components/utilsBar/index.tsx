import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { factsModel } from '../../../../shared/entities/facts/FactsModel';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';
import { useFacts } from '../../../presenter/useFacts';
import { IFact } from '../../../../shared/entities/facts/IFact';

interface IProps {
    item: IFact,
    factsLength: number
}

export const UtilsBar: FC<IProps> = observer(({ item, factsLength }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { setFavouriteFacts } = useFacts()

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>{'<'}</Text>
            </TouchableOpacity>
            <Text>{factsModel.lastIndex + 1}/{factsLength}</Text>
            <TouchableOpacity onPress={() => setFavouriteFacts(item.id)}>
                <Text>{item.isFavourite ? 'fav+' : 'fav'}</Text>
            </TouchableOpacity>
        </View>
    );
});

