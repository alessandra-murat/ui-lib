import * as React from "react";
import { Link } from "react-router-dom";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "flex justify-center items-center gap-xs w-fit disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        filled:
          "bg-brand-500 text-neuter-50 hover:bg-brand-400 hover:border-brand-400 transition-colors duration-300 ease-in-out border-2 border-brand-500 focus:border-brand-600 active:border-brand-600 active:bg-brand-600 disabled:opacity-50",
        outlined:
          "bg-neuter-transparent text-brand-500 hover:bg-brand-100 transition-colors duration-300 ease-in-out border-2 border-brand-500 focus:border-brand-600 active:border-brand-600 active:bg-brand-200 disabled:opacity-50",
        borderless:
          "bg-neuter-transparent text-brand-500 hover:bg-brand-100 transition-colors duration-300 ease-in-out focus:border-2 focus:border-brand-600 active:bg-brand-200 active:text-brand-600 disabled:opacity-50",
      },
      size: {
        sm: "h-10 px-[11px] text-sm font-bold",
        md: "h-12 px-[14px] text-md font-bold",
        lg: "h-14 px-[17px] text-lg font-bold",
      },

      shape: {
        square: "rounded-md",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "lg",
      shape: "square",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, shape, size, ...props }, ref) => {
    // if (href) {
    //   return (
    //     <Link
    //       to={href}
    //       className={cn(buttonVariants({ variant, size, className }))}
    //     >
    //       {children}
    //     </Link>
    //   );
    // }
    return (
      <button
        className={twMerge(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export { ButtonRoot, buttonVariants };
