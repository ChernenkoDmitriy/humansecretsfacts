import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { Header } from '../../../shared/components/header';
import { factsModel } from '../../../shared/entities/facts/FactsModel';
import { FactCarousel } from '../components/factsCarousel';
import { getStyle } from './styles';


interface IProps {
}

export const AllFactsView: FC<IProps> = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <SafeAreaView style={styles.container}>
            <Header title={t('allFacts')}/>
            <FactCarousel facts={factsModel.facts} index={0} />
        </SafeAreaView >
    );
});