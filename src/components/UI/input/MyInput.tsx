import React from "react";
interface IMyInputProps {
  type: string;
  placeholder: string;
}
const MyInput: React.FC<IMyInputProps> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />;
};

export default MyInput;
