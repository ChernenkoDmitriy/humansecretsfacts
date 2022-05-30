import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo, useRef, useState } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useUiContext } from '../../src/UIProvider';
import { AdBanner } from '../components/adBanner';
import { FactHeader } from '../components/factHeader';
import { FactItem } from '../components/factItem';
import { getStyle } from './styles';

const FACTS = [
    { id: '451', text: 'fact1' },
    { id: '267', text: 'fact2' },
    { id: '398', text: 'fact3' },
    { id: '467', text: 'fact4' },
    { id: '565', text: 'fact5' },
]

const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 }

interface IProps {
    navigation: StackNavigationProp<any>;
}

interface IFacts {
    id: string,
    text: string
}

export const FactScreen: FC<IProps> = observer(({ navigation }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const flatListRef = useRef<FlatList<IFacts> | null>()
    const [currentVisible, setCurrentVisible] = useState(0)

    const onViewRef = useRef(({ changed }: { changed: any }) => {
        if (changed[0].isViewable) {
            setCurrentVisible(changed[0].index)
        }
    })

    const renderItem = ({ item }: any) => (
        <FactItem item={item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FactHeader navigation={navigation} allFacts={FACTS.length} currentViewFact={currentVisible} />
            <FlatList
                data={FACTS}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={(ref) => { flatListRef.current = ref }}
                inverted
                viewabilityConfig={viewConfigRef}
                onViewableItemsChanged={onViewRef.current}
            />
            <AdBanner />
        </SafeAreaView >
    );
});

