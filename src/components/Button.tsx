// ===========================================================================

import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick?: () => void;
  radius: string;
  width: string;
}

export const Button: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </button>
  );
};

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
