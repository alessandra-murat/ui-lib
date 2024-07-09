import React from "react";
import { IconBaseProps } from "react-icons/lib";
export interface iIconProps extends IconBaseProps {
    name: string;
    color?: string;
}
declare const Icon: React.FC<iIconProps>;
export default Icon;
