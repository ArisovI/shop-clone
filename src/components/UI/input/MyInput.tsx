import React from "react";
interface IMyInputProps {
  type: string;
  placeholder: string;
  onChange?: (e: any) => void;
  value?: string;
}
const MyInput: React.FC<IMyInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default MyInput;
