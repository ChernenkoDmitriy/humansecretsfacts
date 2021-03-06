import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categoryMock } from '../../../../MOCKS/factsMock';
import { useUiContext } from '../../../../src/UIProvider';
import { AdBanner } from '../../../shared/components/adBanner';
import { CategoryListItem } from '../components/categoryListItem';
import { getStyle } from './styles';

interface IProps {
}

export const CategoryScreen: FC<IProps> = observer(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const renderItem = ({ item }: { item: any }) => (<CategoryListItem item={item} />);

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
                initialNumToRender={10}
                style={styles.flatList}
                contentContainerStyle={{ paddingBottom: 5 }}
            />
        </SafeAreaView>
    );
});
