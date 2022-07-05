import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        tabBarStyle: {
            backgroundColor: colors.tabBar,
            borderRadius: 100,
            margin: 10,
            position: 'absolute',
        },
    });
    return styles;
}
