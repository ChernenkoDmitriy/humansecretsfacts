import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { Header } from '../../../shared/components/header';
import { useFacts } from '../../presenter/useFacts';
import { FactCarousel } from '../components/factsCarousel';
import { getStyle } from './styles';


interface IProps {
    navigation: StackNavigationProp<any>;
}

export const FavouritesFactsView: FC<IProps> = observer(({ navigation }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { getFavouriteFacts } = useFacts()

    return (
        <SafeAreaView style={styles.container}>
            <Header title={t('favourite')} />
            <FactCarousel facts={getFavouriteFacts} index={0} navigation={navigation} />
        </SafeAreaView >
    );
});