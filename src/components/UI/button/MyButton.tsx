import React from "react";
interface IMyButtonProps {
  children: string | any;
  onClick?: (i: any) => void;
}
const MyButton: React.FC<IMyButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default MyButton;
