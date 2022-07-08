import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';
import { scaleVertical, _size } from '../../../../../src/utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: scaleVertical(60),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
        },
        text:{
            fontSize: 16,
            color: colors.regularText,
        }
    });
    return styles;
}
