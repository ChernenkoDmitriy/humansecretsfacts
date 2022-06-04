import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';
import { scaleVertical, _size } from '../../../../../src/utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: _size.height,
            width: _size.width,
            paddingHorizontal: 15,
            paddingVertical: 15
        },
        image: {
            width: '100%',
            height: 200,
            backgroundColor: colors.iconColor,
            marginBottom: 20
        },
        text: {
            textAlign: 'center',
            fontSize: 18
        },
        navBar: {
            width: '100%',
            height: scaleVertical(60),
            backgroundColor: colors.accentColorLight,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10
        }

    });
    return styles;
}
