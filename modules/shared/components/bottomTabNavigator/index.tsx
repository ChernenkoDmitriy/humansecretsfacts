import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useMemo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { factsModel } from '../../entities/facts/FactsModel';
import { useUiContext } from '../../../../src/UIProvider'
import { getStyle } from './styles';

interface IProps {
    navigation: StackNavigationProp<any>;
}

export const BottomTabNavigator: FC<IProps> = ({ navigation }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onPress = (path: string) => {
        navigation.navigate(path)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('FAVORITES_FACTS')}>
                <Text>FAV</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RECENTLY_READ')}>
                <Text>LAST</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress('SETTINGS')}>
                <Text>SET</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress('INFORMATION')}>
                <Text>INFO</Text>
            </TouchableOpacity>
        </View>
    );
};
