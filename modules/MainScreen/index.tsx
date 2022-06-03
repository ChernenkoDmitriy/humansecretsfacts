import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { FlatList, View } from 'react-native';
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

export const MainScreen: FC<IProps> = observer(({ navigation }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const formatData = (dataList: any[], numColumns: number) => {
        if (dataList.length % numColumns !== 0) {
            dataList.push({ id: String(dataList.length + 1), title: 'empty', empty: true })
            return dataList;
        } else {
            return dataList
        }
    }

    const renderItem = ({ item }: { item: any }) => {
        if (item.empty) {
            return <View style={styles.emptyItem} />
        }
        return <CategoryListItem item={item} navigation={navigation} />
    };

    return (
        <SafeAreaView style={styles.container}>
            <AdBanner />
            <FlatList
                data={formatData(categoryMock, 2)}
                renderItem={renderItem}
                keyExtractor={item => item}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
            <BottomTabNavigator navigation={navigation} />
        </SafeAreaView>
    );
});
