import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { Header } from '../../../shared/components/header';
import { HeaderWithBackButton } from '../../../shared/components/headerWithBackButton';
import { useFacts } from '../../presenter/useFacts';
import { FactCarousel } from '../components/factsCarousel';
import { getStyle } from './styles';


interface IProps {
}

export const FavoritesFactsView: FC<IProps> = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { getFavoriteFacts } = useFacts()

    return (
        <SafeAreaView style={styles.container}>
            <Header title={t('Favorite')} />
            <FactCarousel facts={getFavoriteFacts} index={0} />
        </SafeAreaView >
    );
});