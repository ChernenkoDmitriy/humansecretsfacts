import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number,
    height?: number,
    color?: string
}

export const HomeIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={width || 30} height={height || 30} viewBox={"0 0 80 80"} fill="none">
        <Path
            d="M8.52505 32.0113L41.1009 11.6302"
            stroke={color || "#FEFBF9"}
            stroke-width="7"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <Path
            d="M73.9591 32.0113L41.3832 11.6302"
            stroke={color || "#FEFBF9"}
            stroke-width="7"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <Path
            d="M18.4615 66.5067V26.6478"
            stroke={color || "#FEFBF9"} 
            stroke-width="7"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <Path
            d="M63.458 66.5067V25.7445"
            stroke={color || "#FEFBF9"}
            stroke-width="7"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <Path
            d="M19.252 66.5067H63.458"
            stroke={color || "#FEFBF9"}
            stroke-width="7"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <Path
            d="M51.5455 8.52505V17.7841"
            stroke={color || "#FEFBF9"} 
            stroke-width="7"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <Path
            d="M58.885 8.52505V22.5829"
            stroke={color || "#FEFBF9"}
            stroke-width="7"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <Path
            d="M51.5455 8.52505H58.4333"
            stroke={color || "#FEFBF9"}
            stroke-width="7"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </Svg>
)
