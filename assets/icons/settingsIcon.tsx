import React, { FC } from "react"
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number,
    height?: number,
    color?: string
}

export const SettingsIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={width || 107} height={height || 107} viewBox="0 0 107 107" fill="none">
        <Path
            d="M43.8545 29.1534L49.7642 12.9953H58.6661L64.875 29.1534L79.6118 21.8224L85.8207 28.1809L78.7889 43.5161L94.4233 49.0518V57.1308L78.4149 63.4893L85.8207 78.6001L79.6118 85.0334L63.8277 77.6276L58.8157 93.2621H49.5398L43.8545 77.2536L29.043 84.5098L22.5349 78.0765L29.9406 63.3397L14.0818 57.5048V48.6777L29.7162 43.2169L22.3852 27.7321L29.043 21.6728L43.8545 29.1534Z"
            stroke={color || "#FEFBF9"}
            strokeWidth="7"
            strokeMiterlimit="10"
        />
        <Path
            d="M67.9421 51.8196C67.6429 55.1111 65.9972 58.3277 63.0797 60.4223C58.8158 63.6389 52.7565 62.8161 49.5398 58.4773C46.9964 55.0363 47.6697 50.1739 51.1108 47.5557C53.8786 45.4611 57.7685 46.0595 59.8631 48.8274C61.5088 51.0715 61.06 54.1386 58.8158 55.7843C57.0204 57.1308 54.5518 56.7568 53.2053 54.9615C52.1581 53.5401 52.4573 51.5204 53.8786 50.4731C55.0007 49.6502 56.6464 49.8746 57.4693 50.9967C56.6464 49.8746 55.0007 49.6502 53.8786 50.4731C52.4573 51.5204 52.1581 53.5401 53.2053 54.9615C54.5518 56.7568 57.0204 57.056 58.8158 55.7843C61.06 54.1386 61.5088 50.9967 59.8631 48.8274C57.7685 46.0595 53.8786 45.4611 51.1108 47.5557C47.6697 50.0991 46.9216 55.0363 49.5398 58.4773C52.7565 62.8161 58.8906 63.7137 63.1545 60.4971C65.9972 58.3277 67.6429 55.1111 67.9421 51.8196ZM67.9421 51.8196C67.2689 45.2367 61.7332 40.0751 54.9259 40.0751C47.6697 40.0751 41.8348 45.9099 41.8348 53.1661C41.8348 60.4223 47.6697 66.2571 54.9259 66.2571C62.1821 66.2571 68.0169 60.4223 68.0169 53.1661C68.0169 52.7173 68.0169 52.2684 67.9421 51.8196Z"
            stroke={color || "#FEFBF9"}
            strokeWidth="4"
            strokeMiterlimit="10"
        />
    </Svg>
)
