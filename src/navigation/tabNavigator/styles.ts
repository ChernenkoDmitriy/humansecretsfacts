import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        tabBarStyle: {
            // zIndex: -1,
            backgroundColor: colors.tabBar,
            borderTopWidth: 0,
            borderRadius: 100,
            margin: 10,
            position: 'absolute',
            height: 50,
        },
    });
    return styles;
}
