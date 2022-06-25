import React from "react";
import { overrideTailwindClasses } from "tailwind-override";
import { classNames } from "./string";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  xs?: boolean;
  sm?: boolean;
  lg?: boolean;
  xl?: boolean;
  light?: boolean;
  danger?: boolean;
  full?: boolean;
}
/**
 * Button Component
 * Implements a basic core button component
 * @param {*} props
 */
export const Button = ({
  children,
  className = "",
  xs = false,
  sm = false,
  lg = false,
  xl = false,
  light = false,
  full = false,
  disabled = false,
  ...props
}: ButtonProps): JSX.Element => {
  const isDisabled = disabled && "cursor-not-allowed opacity-50";
  return (
    <button
      className={overrideTailwindClasses(
        classNames(
          "cursor-pointer px-4 py-3",
          "inline-flex items-center border border-transparent",
          "text-sm font-medium rounded-xl shadow-sm ",
          "flex justify-center",
          "font-black",
          "text-lg",
          full ? "w-full" : "",
          xs ? "px-2.5 py-1.5 text-xs rounded" : "",
          sm ? "px-3 py-2 leading-4 rounded-md" : "",
          lg ? "px-4 py-2 text-base" : "",
          xl ? "px-6 py-3 text-base" : "",
          light
            ? "border-gray-300 text-blue-900 bg-blue-200" +
                " hover:bg-blue-900 ripple-on-surface hover:text-white"
            : "bg-blue-900 text-white",
          isDisabled ? isDisabled : "",
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
};
// =====================================================q
// interface Props {
//   border: string;
//   color: string;
//   children?: React.ReactNode;
//   height: string;
//   onClick?: () => void;
//   radius: string;
//   width: string;
// }

// export const Button: React.FC<Props> = ({
//   border,
//   color,
//   children,
//   height,
//   onClick,
//   radius,
//   width,
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       style={{
//         backgroundColor: color,
//         border,
//         borderRadius: radius,
//         height,
//         width,
//       }}
//     >
//       {children}
//     </button>
//   );
// };

// ===========================================================================
// interface ButtonProps = {
//   handleClick: (event?: React.MouseEvent<HTMLButtonElement>, id: number) => void;
// };

// export const Buttons = (props: ButtonProps) => {
//   console.log(typeof event);
//   return (
//     <div
//       style={{
//         background: "rgba(0,0,0,0.5)",
//         width: "100px",
//         padding: "10px 30px",
//         color: "white",
//         textAlign: "center",
//         cursor: "pointer",
//         margin: "2px 2px",
//       }}
//       onClick={(event) => props.handleClick(event, 1)}
//     >
//       ButtonTwo
//     </div>
//   );
// };

// ===========================================================================
// interface Props {
//   children: React.ReactNode;
//   onClick: () => void;
//   variant?: string; // default, primary, info, success, warning, danger, dark
//   size?: string; // sm, md, lg
//   disabled?: boolean;
// }

// // button component, consuming props
// const Button: React.FC<Props> = ({
//   children,
//   onClick,
//   variant = "default",
//   size = "md",
//   disabled,
//   ...rest
// }) => {
//   return (
//     <button
//       className={`btn ${variant} ${size}` + (disabled ? " disabled" : "")}
//       onClick={onClick}
//       disabled={disabled}
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

// ===========================================================================
// import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
// import * as Styled from "./UltimateButton.styles";

// type ButtonProps<T extends ElementType> = {
//   renderAs?: T;
//   isLoading?: boolean;
//   isCompleted?: boolean;
//   disabled?: boolean;
//   children: ReactNode;
// } & ComponentPropsWithoutRef<T>;

// // 💡 In generic the HTML type of component will be specified. And by default it is button
// const UltimateButton = <T extends ElementType = "button">({
//   renderAs,
//   isLoading,
//   isCompleted,
//   children,
//   ...rest
// }: ButtonProps<T>): JSX.Element => {
//   return (
//     <Styled.BTN
//       as={renderAs}
//       isLoading={isLoading}
//       isCompleted={isCompleted}
//       {...rest}
//     >
//       {children}
//     </Styled.BTN>
//   );
// };

// export default UltimateButton;

// ===========================================================================
