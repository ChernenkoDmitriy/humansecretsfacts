import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            paddingBottom: 60,
        },
        flatList: {
            overflow: 'visible',
        }
    });
    return styles;
}
