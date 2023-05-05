import React from "react";
interface IMyButtonProps {
  children: string | any;
}
const MyButton: React.FC<IMyButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default MyButton;
