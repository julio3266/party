import React from "react";

interface IButtonProps {
  title: string;
  handleModal: () => void;
}

export const Button: React.FC<IButtonProps> = ({ title, handleModal }) => {
  return (
    <div className=" flex flex-row w-2/12 float-right">
      <button
        onClick={handleModal}
        className="block text-white bg-indigo-900 hover:bg-indigo-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        {title}
      </button>
    </div>
  );
};
