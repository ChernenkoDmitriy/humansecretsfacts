import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colors/IColorsController';
import { scaleFontSize } from '../../../../src/utils';


export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            paddingHorizontal: 10,
            paddingVertical: 10,
        },
        questionText: {
            fontSize: scaleFontSize(16),
            fontWeight: '500',
            color: colors.regularText,
            marginBottom: 10,
            textAlign: 'justify'
        },
        answerText: {
            fontSize: scaleFontSize(14),
            color: colors.subText,
            textAlign: 'justify'
        }
    });
    return styles;
}