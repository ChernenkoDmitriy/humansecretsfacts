import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number,
    height?: number,
    color?: string
}

export const StoryIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={width || 104} height={height || 95} viewBox="0 0 104 95" fill="none">
        <Path
            d="M4.46716 20.1505L33.319 3.67865"
            stroke={color || "#FEFBF9"} 
            strokeWidth="7"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M4.46716 20.3286L31.6271 38.9373"
            stroke={color || "#FEFBF9"} 
            strokeWidth="7"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M96.5437 90.5786C104.38 71.2576 96.6328 50.6901 81.4945 43.211C70.4524 37.7798 53.5331 37.7798 46.142 47.1286C42.491 51.7586 39.7305 60.4842 44.1829 65.2922C48.0121 69.4769 55.9374 69.2988 60.568 65.9154C67.7809 60.6622 65.5547 48.9984 65.1095 47.1286C61.5475 28.9651 38.5729 21.6641 36.97 21.1299C25.4827 17.6574 15.242 19.5272 9.63196 21.1299"
            stroke={color || "#FEFBF9"}
            strokeWidth="7"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
