import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colors/IColorsController';
import { scaleVertical } from '../../../../src/utils';

const { width } = Dimensions.get('screen');
export const BUTTON_SIZE = width / 4;

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            zIndex: 1,
            width: '100%',
            height: scaleVertical(60),
            backgroundColor: colors.accentColorLight
        },

    });
    return styles;
}
