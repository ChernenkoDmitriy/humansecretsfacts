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
    navigation: StackNavigationProp<any>;
}

export const CategoryFactsView: FC<IProps> = observer(({ navigation }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <SafeAreaView style={styles.container}>
            <FactCarousel facts={factsModel.facts} index={factsModel.lastIndex} />
        </SafeAreaView >
    );
});