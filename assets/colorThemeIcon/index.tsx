import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number,
    height?: number,
    color?: string
}

export const ColorThemeIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={width || 26} height={height || 26} fill="none" viewBox="0 0 122 122"  >
        <Path
            d="M122.88 61.44c0 8.47-1.5 16.34-4.5 23.58-.49 1.19-1.02 2.35-1.59 3.49-2.92 5.89-6.89 11.35-11.92 16.36-1.67 1.68-3.4 3.24-5.17 4.68a59.966 59.966 0 0 1-5.48 3.98c-9.65 6.23-20.58 9.34-32.78 9.34-8.47 0-16.33-1.5-23.58-4.5-1.19-.49-2.35-1.02-3.49-1.59-5.89-2.92-11.35-6.89-16.36-11.92-1.68-1.67-3.24-3.4-4.68-5.17a59.966 59.966 0 0 1-3.98-5.48C3.11 84.58 0 73.64 0 61.44c0-8.47 1.5-16.33 4.5-23.58.49-1.19 1.02-2.35 1.59-3.49 2.92-5.89 6.89-11.35 11.92-16.36 1.67-1.68 3.4-3.24 5.17-4.68 1.78-1.45 3.61-2.78 5.48-3.98C38.3 3.11 49.24 0 61.44 0c8.47 0 16.33 1.5 23.58 4.5 1.19.49 2.35 1.02 3.49 1.59 5.89 2.92 11.35 6.89 16.36 11.92 1.68 1.67 3.24 3.4 4.68 5.17 1.45 1.78 2.78 3.61 3.98 5.48 6.24 9.64 9.35 20.58 9.35 32.78zM61.44 10.96h.32v100.96h-.32c-27.88 0-50.48-22.6-50.48-50.48 0-27.88 22.6-50.48 50.48-50.48z"
            stroke={color || "#000"}
            fill={color || "#000"}
            fillRule="evenodd"
            clipRule="evenodd"
        />
    </Svg>
)
