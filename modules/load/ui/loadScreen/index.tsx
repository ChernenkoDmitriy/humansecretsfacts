import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { Image, View } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { getStyle } from './styles';
import { LogoTextIcon } from '../../../../assets/icons/logoTextIcon';
import { useLoadScreen } from '../../presenter/useLoadScreen';
import Animated from 'react-native-reanimated';

const ICON = require('../../../../assets/icons/splashImg.png');

interface IProps {
}

export const LoadScreen: FC<IProps> = observer(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { reanimatedStyle } = useLoadScreen(colors);

    return (
        <View style={styles.container}>
            <Image source={ICON} style={styles.icon} />
            <Animated.View style={[styles.name, reanimatedStyle]}>
                <LogoTextIcon width={200} height={50} />
            </Animated.View>
        </View>
    );
});