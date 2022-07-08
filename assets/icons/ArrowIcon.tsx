import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number,
    height?: number,
    color?: string,
    riteSide?: boolean,
}

export const ArrowIcon: FC<IProps> = ({ width, height, color, riteSide }) => (
    <Svg width={width || 102} height={height || 223} viewBox="0 0 102 223" fill="none"  >
        {riteSide
            ? <Path
                d="M6.15 219L98 113.451M4 4l94 107.221"
                stroke={color || "#FEFBF9"}
                strokeWidth={7}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            : <Path
                d="M95.85 4L4 109.549M98 219L4 111.779"
                stroke={color || "#FEFBF9"}
                strokeWidth={7}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        }
    </Svg>
)
