import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const button = cva(
  "relative flex items-center justify-center gap-x-2 rounded-lg font-semibold transition-colors",
  {
    variants: {
      variant: { outlined: "", contained: "" },
      color: {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        secondary: "bg-white hover:bg-gray-200",
        success: "",
        danger: "",
      },
      size: {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-sm",
        large: "px-8 py-3",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "contained",
      color: "primary",
      size: "medium",
    },
  },
);

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

const Button = ({
  children,
  className,
  isLoading,
  variant,
  color,
  size,
  ...props
}: Props) => {
  return (
    <button className={button({ variant, color, className, size })} {...props}>
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
