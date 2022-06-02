import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { factsModel } from '../../../src/entities/facts/facts';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    item: any
    navigation: StackNavigationProp<any>;
    facts: any;
    currentViewFact: number | undefined;
}

export const FactItem: FC<IProps> = observer(({ item, currentViewFact, facts, navigation }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.image} />
            <View style={styles.navBar}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Text>{'<'}</Text>
                </TouchableOpacity>
                <Text>{currentViewFact}/{facts.length}</Text>
                <TouchableOpacity onPress={() => factsModel.favouriteFacts = factsModel.currentFactId}>
                    <Text>{factsModel.currentFact.isFavourite ? 'fav+' : 'fav'}</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>{item.text}</Text>
        </ScrollView>
    );
});

