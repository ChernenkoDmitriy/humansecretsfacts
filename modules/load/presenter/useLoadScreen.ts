import { useEffect } from "react";
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import RNBootsplash from 'react-native-bootsplash';
import { appState } from "../../shared/entities/appState/AppStateController";
import { _size } from "../../../src/utils";
import { IColors } from "../../../src/UIProvider/colors/IColorsController";
import { ParamListBase, StackActionHelpers, useNavigation } from "@react-navigation/native";

export const useLoadScreen = (colors: IColors) => {
    const navigation: StackActionHelpers<ParamListBase> = useNavigation();
    const width = useSharedValue(0);
    const borderRadius = useSharedValue(0);
    const marginTop = useSharedValue(0);
    const color = useSharedValue(colors.borderCurrency);

    useEffect(() => {
        RNBootsplash.hide().then(() => {
            width.value = _size.width - 20;
            borderRadius.value = 40;
            marginTop.value = (_size.height / 2) - 60;
            color.value = colors.tabBar;
            setTimeout(() => { 
                appState.isLoaded = true;
                navigation.replace('CATEGORY_SCREEN');
            }, 3000);
        });
    }, []);

    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(width.value, {
                duration: 2000,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            borderRadius: withTiming(borderRadius.value, {
                duration: 2000,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            translateY: withTiming(marginTop.value, {
                duration: 2000,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            backgroundColor: withTiming(color.value, {
                duration: 3000,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
        };
    });

    return { reanimatedStyle };
};