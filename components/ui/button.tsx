import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "rounded-lg font-semibold sm:font-bold md:text-xl lg:text-2xl whitespace-nowrap transition-colors duration-300",
  {
    variants: {
      intent: {
        primary: "px-8 py-2 bg-blue text-white",
        secondary: "px-8 py-2 text-red border border-red",
        icon: "flex justify-center text-white items-center w-[43px] h-[43px]",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface ButtonVariants
  extends VariantProps<typeof buttonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
  className,
  onClick,
  children,
  ...variants
}: ButtonVariants & HTMLProps<HTMLButtonElement>) => {
  const classes = twMerge(buttonVariants(variants), className);

  return (
    <button className={classes} onClick={onClick} {...variants}>
      {children}
    </button>
  );
};
