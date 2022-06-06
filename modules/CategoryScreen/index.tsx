import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categoryMock } from '../../MOCKS/factsMock';
import { useUiContext } from '../../src/UIProvider';
import { AdBanner } from '../components/adBanner';
import { BottomTabNavigator } from '../components/bottomTabNavigator';
import { CategoryListItem } from '../components/categoryListItem';
import { getStyle } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
}

export const CategoryScreen: FC<IProps> = observer(({ navigation }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const renderItem = ({ item }: { item: any }) => (<CategoryListItem item={item} navigation={navigation} />);

    const keyExtractor = useCallback((item: string) => item, []);

    return (
        <SafeAreaView style={styles.container}>
            <AdBanner />
            <FlatList
                data={categoryMock}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
});
