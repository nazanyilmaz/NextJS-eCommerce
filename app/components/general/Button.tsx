import { IconType } from "react-icons";

interface ButtonProps {
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  xsmall?: boolean;
  outline?: boolean;
  icon?: IconType;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  onClick,
  small,
  outline,
  disabled,
  icon: Icon,
  xsmall,
}) => {
  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center gap-3 my-5 rounded-lg p-3  hover:bg-slate-400 ${
        small ? "w-[250px]" : "w-full"
      } ${
        xsmall ? "w-[50px] bg-red-600 flex items-center justify-center" : ""
      } ${
        outline
          ? "border text-black font-bold"
          : "bg-black text-white font-bold"
      }`}
      onClick={onClick}
      type={type}
    >
      {Icon && <Icon size={25} />}
      {text}
    </button>
  );
};

export default Button;
