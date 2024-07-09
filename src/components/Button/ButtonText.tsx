import React from "react";
export interface ButtonTextProps {
  text: string;
}

const ButtonText = ({ text }: ButtonTextProps) => {
  return <p>{text}</p>;
};

export default ButtonText;
