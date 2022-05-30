import { isTemplateElement } from '@babel/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { ScrollView, Text, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUiContext } from '../../src/UIProvider';
import { AdBanner } from '../components/adBanner';
import { BottomTabNavigator } from '../components/bottomTabNavigator';
import { CategoryListItem } from '../components/categoryListItem';
import { getStyle } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
}

const DATA = [
    { id: '1', title: 1 },
    { id: '2', title: 2 },
    { id: '3', title: 3 },
    { id: '4', title: 4 },
    { id: '5', title: 5 },
    { id: '6', title: 6 },
    { id: '7', title: 7 },
]

export const MainScreen: FC<IProps> = observer(({ navigation }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const formatData = (dataList: any[], numColumns: number) => {
        const totalRows = Math.floor(dataList.length / numColumns);
        let totalLastRow = dataList.length - (totalRows * numColumns);

        while (totalLastRow !== 0 && totalLastRow !== numColumns) {
            dataList.push({ id: String(dataList.length + 1), title: 'empty', empty: true })
            totalLastRow++
        }

        return dataList;
    }

    const renderItem = ({ item }: any) => {
        if (item.empty) {
            return <View style={styles.emptyItem} />
        }
        return <CategoryListItem item={item} navigation={navigation} />
    };

    return (
        <SafeAreaView style={styles.container}>
            <AdBanner />
            <FlatList
                data={formatData(DATA, 2)}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
            <BottomTabNavigator navigation={navigation} />
        </SafeAreaView>
    );
});
