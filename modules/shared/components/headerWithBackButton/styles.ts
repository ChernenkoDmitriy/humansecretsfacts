import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            zIndex: 1,
            width: '100%',
            position: 'absolute',
            paddingTop: 10,
            height: 70,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: colors.shadow,
            // backgroundColor: colors.background,
            paddingRight: 20,
            shadowColor: colors.shadow,
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
        },
        buttonBack: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        contentWrapper: {
            flexDirection: 'row',
        },
        titleContainer: {
            flex: 1,
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        titleContainerButton: {
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        title: {
            fontSize: 20,
            lineHeight: 24,
            color: colors.regularText,
            fontFamily: 'Roboto-Regular',
        },
    });
    return styles;
}
