import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { factsModel } from '../../../src/entities/facts/facts';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
    facts: any;
    currentViewFact: number | undefined;
}

export const FactHeader: FC<IProps> = observer(({ navigation, facts, currentViewFact }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigation.goBack}>
                <Text>{'<'}</Text>
            </TouchableOpacity>
            <Text>{currentViewFact}/{facts.length}</Text>
            <TouchableOpacity onPress={() => factsModel.favouriteFacts = factsModel.currentFactId}>
                <Text>{factsModel.facts[currentViewFact || 0].isFavourite ? 'fav+' : 'fav'}</Text>
            </TouchableOpacity>
        </View>
    );
});

