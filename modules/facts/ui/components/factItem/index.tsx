import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';
import { IFact } from '../../../../shared/entities/facts/IFact';
import { FactHeader } from '../factHeader';
import { ArrowIcon } from '../../../../../assets/icons/ArrowIcon';
import { AdBanner } from '../../../../shared/components/adBanner';
import { factsModel } from '../../../../shared/entities/facts/FactsModel';

interface IProps {
    item: IFact,
    factsLength: number,
}

export const FactItem: FC<IProps> = observer(({ item, factsLength }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const goNextPage = useCallback(() => { factsModel.lastIndex = factsModel.lastIndex + 1 }, [factsModel.lastIndex]);

    const goPrevPage = useCallback(() => { factsModel.lastIndex = factsModel.lastIndex - 1 }, [factsModel.lastIndex]);

    const isPrevDisabled = useMemo(() => factsModel.lastIndex <= 0 ? true : false, [factsModel.lastIndex]);

    const isNextDisabled = useMemo(() => factsModel.lastIndex >= factsLength - 1 ? true : false, [factsModel.lastIndex]);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Image source={require('../../../../../assets/icons/eyeTheme.png')} style={styles.image} />
            <Text style={styles.categoryTitle}>{t(item.category)}</Text>
            <View style={styles.card}>
                <FactHeader item={item} factsLength={factsLength} />
                <View style={styles.cardContent}>
                    <TouchableOpacity onPress={goPrevPage} disabled={isPrevDisabled}>
                        <ArrowIcon color={colors.regularText} width={30} />
                    </TouchableOpacity>
                    <Text style={styles.text}>{item.text}</Text>
                    <TouchableOpacity onPress={goNextPage} disabled={isNextDisabled}>
                        <ArrowIcon color={colors.regularText} width={30} riteSide={true} />
                    </TouchableOpacity>
                </View>
            <AdBanner />
            </View>
        </ScrollView>
    );
});

