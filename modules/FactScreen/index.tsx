import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { IFactsMock } from '../../MOCKS/IFactsMock';
import { factsModel } from '../../src/entities/facts/facts';
import { useUiContext } from '../../src/UIProvider';
import { _size } from '../../src/utils';
import { AdBanner } from '../components/adBanner';
import { FactItem } from '../components/factItem';
import { getStyle } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
    route: NavigatorScreenParams<any>
}

export const FactScreen: FC<IProps> = observer(({ navigation, route }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const flatListRef = useRef<Carousel<IFactsMock> | null>()
    const [currentVisible, setCurrentVisible] = useState<number | undefined>(0)

    const index = route.params.index
    const facts = route.params.facts

    const renderItem = ({ item }: { item: IFactsMock }) => (
        <FactItem item={item} navigation={navigation} facts={facts} currentViewFact={currentVisible} />
    );

    const onSnap = () => {
        setCurrentVisible(flatListRef.current?.currentIndex)
        //@ts-ignore
        factsModel.lastIndex = flatListRef.current?.currentIndex
        factsModel.currentFactId = facts[flatListRef.current?.currentIndex || 0].id
    }

    return (
        <SafeAreaView style={styles.container}>
            <Carousel
                ref={(ref) => { flatListRef.current = ref }}
                data={facts}
                renderItem={renderItem}
                sliderWidth={_size.width}
                itemWidth={_size.width}
                pagingEnabled
                initialScrollIndex={index}
                onSnapToItem={() => onSnap()}
            />
            <AdBanner />
        </SafeAreaView >
    );
});