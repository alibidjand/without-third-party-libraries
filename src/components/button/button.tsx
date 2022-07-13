import { Children } from "react";
import buttonStyle from "./button.module.css";

interface IButtom {
  typeStyle: "1" | "2";
}

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    IButtom
> = ({ typeStyle, children, ...props }) => {
  return (
    <button
      className={buttonStyle[`button-${typeStyle}`]}
      role="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
