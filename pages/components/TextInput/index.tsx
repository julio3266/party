import React from "react";
import { useForm } from "react-hook-form";

interface IInputProps {
  label: string;
  inputName?: string;
  inputValue?: string;
  isRequired?: boolean;
}

export const TextInput: React.FC<IInputProps> = ({
  label,
  inputName,
  inputValue,
  isRequired,
}) => {
  return (
    <input
      type="text"
      id="create-account-pseudo"
      required={isRequired}
      value={inputValue}
      className=" rounded-lg border-transparent flex-1 appearance-none border mb-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      name={inputName}
      placeholder={label}
    />
  );
};
