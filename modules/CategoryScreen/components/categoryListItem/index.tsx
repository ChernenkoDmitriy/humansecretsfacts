import { NavigationProp, useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { factsModel } from '../../../shared/entities/facts/FactsModel';
import { getStyle } from './styles';
import { DigestionChucheeIcon } from '../../../../assets/icons/chucheeIcons/digestionChucheeIcon';
import { BrainChucheeIconChucheeIcon } from '../../../../assets/icons/chucheeIcons/brainChucheeIcon';
import { BreathAndHeartChucheeIcon } from '../../../../assets/icons/chucheeIcons/breathAndHeartChucheeIcon';
import { FeelingsChucheeIcon } from '../../../../assets/icons/chucheeIcons/feelingsChucheeIcon';
import { HealthChucheeIcon } from '../../../../assets/icons/chucheeIcons/healthChucheeIcon';
import { InterestingFactsChucheeIcon } from '../../../../assets/icons/chucheeIcons/interestingFactsChucheeIcon';
import { BonesAndMusclesChucheeIcon } from '../../../../assets/icons/chucheeIcons/bonesAndMusclesChucheeIcon';

const CATEGORY_IMG: { [key: string]: JSX.Element } = {
    digestion: <DigestionChucheeIcon height={120} width={120} />,
    breathAndHeart: <BreathAndHeartChucheeIcon height={120} width={120} />,
    bonesAndMuscles: <BonesAndMusclesChucheeIcon height={120} width={120} />,
    brain: <BrainChucheeIconChucheeIcon height={120} width={120} />,
    feelings: <FeelingsChucheeIcon height={120} width={120} />,
    health: <HealthChucheeIcon height={120} width={120} />,
    interestingFacts: <InterestingFactsChucheeIcon height={120} width={120} />
};

interface IProps {
    item: string,
}

export const CategoryListItem: FC<IProps> = observer(({ item, }) => {
    const navigation: NavigationProp<any> = useNavigation();
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onPress = useCallback(() => {
        factsModel.setLastIndexByCategory(item);
        navigation.navigate('CATEGORY_FACTS');
    }, []);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {CATEGORY_IMG[item] || null}
            <Text style={styles.text}>{t(item)}</Text>
        </TouchableOpacity>
    );
});

