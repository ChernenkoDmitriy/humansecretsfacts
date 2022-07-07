import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colors/IColorsController';
import { scaleFontSize, scaleHorizontal, scaleVertical, _size } from '../../../../src/utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            zIndex: 1,
            height: scaleVertical(60),
            width: '100%',//_size.width - 20,
            // borderBottomColor: colors.border,
            backgroundColor: colors.background,
            // borderBottomStartRadius: 40,
            // borderBottomEndRadius: 40,
            // margin: 10,
            // borderBottomWidth: 1,
            flexDirection: 'row',
            shadowColor: colors.shadow,
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.53,
            shadowRadius: 13.97,

            elevation: 21,
        },
        button: {
            height: scaleVertical(70),
            width: scaleVertical(70),
            justifyContent: 'center',
            alignItems: 'center',
        },
        textWrapper: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: scaleHorizontal(70),
        },
        title: {
            color: colors.regularText,
            fontSize: scaleFontSize(24)
        }
    });
    return styles;
}
