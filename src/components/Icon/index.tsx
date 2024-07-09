import React from "react";

import { IconBaseProps } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export interface iIconProps extends IconBaseProps {
  name: string;
  color?: string;
}

const Icon: React.FC<iIconProps> = ({ name, color, ...rest }) => {
  let IconComponent: React.ElementType;
  const whichIcon = name.slice(0, 2);
  switch (whichIcon) {
    case "Fa": {
      IconComponent = FaIcons[name as keyof typeof FaIcons];
      break;
    }
    case "Bs": {
      IconComponent = BsIcons[name as keyof typeof BsIcons];
    }
    case "Ai": {
      IconComponent = AiIcons[name as keyof typeof AiIcons];
    }
    default: {
      IconComponent = FaIcons.FaBars;
      break;
    }
  }
  return <IconComponent {...rest} color={color} />;
};

export default Icon;
