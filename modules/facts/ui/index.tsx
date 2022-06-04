import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { IFactsMock } from '../../../MOCKS/IFactsMock';
import { factsModel } from '../../shared/entities/facts/FactsModel';
import { IFact } from '../../shared/entities/facts/IFact';
import { useUiContext } from '../../../src/UIProvider';
import { _size } from '../../../src/utils';
import { AdBanner } from '../../components/adBanner';
import { FactItem } from './components/factItem';
import { getStyle } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
    route: NavigatorScreenParams<any>
}

export const FactScreen: FC<IProps> = observer(({ navigation, route }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const flatListRef = useRef<Carousel<IFact> | null>()

    const facts = factsModel.facts;

    const renderItem = useCallback(({ item }: { item: IFact }) => (
        <FactItem item={item} navigation={navigation} facts={facts} currentViewFact={factsModel.lastIndex} />
    ), []);

    const onSnapToItem = (index: number) => {
        factsModel.lastIndex = index;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Carousel
                ref={(ref) => { flatListRef.current = ref }}
                data={factsModel.facts}
                renderItem={renderItem}
                sliderWidth={_size.width}
                itemWidth={_size.width}
                initialScrollIndex={factsModel.lastIndex}
                pagingEnabled
                getItemLayout={(data, index) => {
                    return { length: _size.width, offset: _size.width * index, index };
                }}
                firstItem={factsModel.lastIndex}
                onSnapToItem={onSnapToItem}
            />
            <AdBanner />
        </SafeAreaView >
    );
});