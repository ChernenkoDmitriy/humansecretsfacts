import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colors/IColorsController';
import { _size } from '../../../src/utils';

const SIZE = _size.width / 2 - 20;

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: SIZE,
            width: SIZE,
            backgroundColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
        },
        text: {
            fontFamily: 'Roboto-Black',
        }
    });
    return styles;
}
