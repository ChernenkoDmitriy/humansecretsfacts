import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { factsModel } from '../../../shared/entities/facts/FactsModel';
import { FactCarousel } from '../components/factsCarousel';
import { getStyle } from './styles';


interface IProps {
    navigation: StackNavigationProp<any>;
}

export const FavouritesFactsView: FC<IProps> = observer(({ navigation }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <SafeAreaView style={styles.container}>
            <FactCarousel facts={factsModel.favouriteFacts} index={1} navigation={navigation} />
        </SafeAreaView >
    );
});