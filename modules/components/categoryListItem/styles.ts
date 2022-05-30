import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colors/IColorsController';
import { scaleVertical, _size } from '../../../src/utils';


export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            height: _size.width / 2,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 5
        },

    });
    return styles;
}
