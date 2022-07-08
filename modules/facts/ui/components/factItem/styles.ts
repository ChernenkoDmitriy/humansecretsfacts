import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';
import { _size } from '../../../../../src/utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: _size.height,
            width: _size.width,
        },
        image: {
            position: 'absolute',
            height: 290,
            width: _size.width,
            backgroundColor: colors.iconColor,
        },
        categoryTitle: {
            height: 50,
            backgroundColor: colors.header,
            fontSize: 25,
            textAlign: 'center',
            textAlignVertical: 'center',
            color: colors.regularText,
            opacity: 0.8
        },
        text: {
            width: _size.width - 120,
            paddingTop: 30,
            textAlign: 'center',
            fontSize: 18,
            color: colors.regularText,
        },
        card: {
            zIndex: 1,
            minHeight: _size.height - 340,
            marginTop: 200,
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
            backgroundColor: colors.background,
        },
        cardContent: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
    });
    return styles;
}
