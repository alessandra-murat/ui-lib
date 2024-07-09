import * as React from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

interface ButtonTextProps {
    text: string;
}

interface ButtonIconProps {
    name: string;
}

declare const buttonVariants: (props?: ({
    variant?: "filled" | "outlined" | "borderless" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    shape?: "square" | "rounded" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    href?: string;
}

declare const Button: {
    Root: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
    Icon: React.FC<ButtonIconProps>;
    Text: ({ text }: ButtonTextProps) => React.JSX.Element;
};

export { Button };
