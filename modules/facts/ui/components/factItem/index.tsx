import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';
import { IFact } from '../../../../shared/entities/facts/IFact';
import { FactHeader } from '../factHeader';

interface IProps {
    item: IFact,
    factsLength: number,
}

export const FactItem: FC<IProps> = observer(({ item, factsLength }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.image} />
            <FactHeader item={item} factsLength={factsLength} />
            <Text style={styles.text}>{item.text}</Text>
        </ScrollView>
    );
});

