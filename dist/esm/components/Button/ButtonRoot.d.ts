import * as React from "react";
import { VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
    variant?: "filled" | "outlined" | "borderless" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    shape?: "square" | "rounded" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    href?: string;
}
declare const ButtonRoot: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { ButtonRoot, buttonVariants };
