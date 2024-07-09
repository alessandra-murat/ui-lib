import * as React from "react";
import Icon from "../Icon";

export interface ButtonIconProps {
  name: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ name }) => {
  return <Icon name={name} />;
};

export default ButtonIcon;
