import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            zIndex: 2,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
        },
        icon: {
            width: 210,
            height: 280,
        },
        name: {
            position: 'absolute',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
        }
    });

    return styles;
};
