declare const Button: {
    Root: import("react").ForwardRefExoticComponent<import("./ButtonRoot").ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    Icon: import("react").FC<import("./ButtonIcon").ButtonIconProps>;
    Text: ({ text }: import("./ButtonText").ButtonTextProps) => import("react").JSX.Element;
};
export default Button;
