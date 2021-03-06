export type IColors = {
    accentText: string;
    inputBackground: string;
    accentColorLight: string;
    background: string;
    border: string;
    regularText: string;
    buttonNumber: string;
    borderCurrency: string;
    subText: string;
    iconColor: string;
    tabBar: string;
    chosenButton: string;
    cardText: string;
    chuchee: string;
    shadow: string;
    header: string;
    headerText: string;
}

export interface IColorsController {
    theme: 'dark' | 'light';
    colors: IColors;
    saveTheme: (data: 'dark' | 'light') => void;
}
