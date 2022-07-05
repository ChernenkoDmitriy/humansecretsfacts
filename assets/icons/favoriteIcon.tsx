import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number,
    height?: number,
    color?: string
}

export const FavoriteIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={width || 30} height={height || 30} viewBox="0 0 124 124" fill="none" >
        <Path
            d="M104.891 53.5786C104.197 46.2871 99.5963 37.8672 92.218 35.4367C82.4961 32.1382 68.5208 39.4297 62.0106 54.9674C55.1531 38.9088 40.9174 31.6174 31.3691 35.0027C23.7304 37.6936 19.3902 46.9815 19.1298 54.6202C18.5222 67.0331 28.5046 76.1474 42.1327 88.647C51.1602 96.8933 61.6634 104.185 61.7502 104.272C61.9238 104.185 73.8158 96.5461 82.6697 88.1262C95.2562 75.9738 106.02 66.165 104.891 53.5786Z"
            stroke={color || "#FEFBF9"}
            strokeWidth="7"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M48.556 71.2864C49.6587 71.2864 50.5525 69.0712 50.5525 66.3386C50.5525 63.6061 49.6587 61.3909 48.556 61.3909C47.4534 61.3909 46.5596 63.6061 46.5596 66.3386C46.5596 69.0712 47.4534 71.2864 48.556 71.2864Z"
            stroke={color || "#FEFBF9"}
            strokeWidth="7"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M77.7219 71.2864C78.8246 71.2864 79.7184 69.0712 79.7184 66.3386C79.7184 63.6061 78.8246 61.3909 77.7219 61.3909C76.6193 61.3909 75.7255 63.6061 75.7255 66.3386C75.7255 69.0712 76.6193 71.2864 77.7219 71.2864Z"
            stroke={color || "#FEFBF9"}
            strokeWidth="7"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M71.1249 83.1784C69.8229 83.9596 66.8716 85.4353 62.8786 85.4353C58.8857 85.4353 55.9344 84.0464 54.6323 83.352"
            stroke={color || "#FEFBF9"}
            strokeWidth="7"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
