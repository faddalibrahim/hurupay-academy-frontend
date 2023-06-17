import { ReactNode, MouseEvent } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  style?: { [key: string]: string };
};

export default function Button({ children, onClick, style }: ButtonProps) {
  return (
    <button
      className="px-10 py-5 font-medium text-[#333] rounded bg-gradient-to-r from-[#FFC100] to-[#FFA800] hover:bg-gradient-to-l"
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
