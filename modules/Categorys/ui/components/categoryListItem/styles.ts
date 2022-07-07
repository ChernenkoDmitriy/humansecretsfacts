import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';
import { _size } from '../../../../../src/utils';

const SIZE = _size.width / 2 - 20;

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: SIZE,
            width: SIZE,
            backgroundColor: colors.background,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
            borderRadius: 30,
            margin: 10,
        },
        text: {
            fontFamily: 'Roboto-Black',
            color: colors.cardText,
        }
    });
    return styles;
}
