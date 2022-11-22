import React from "react";

interface IModalProps {
  active: boolean;
  handleClose?: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({
  active,
  handleClose,
  children,
}) => {
  return (
    <>
      {active && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[600px] flex flex-col">
            <button onClick={handleClose} className="place-self-end">
              X
            </button>
            <div className="bg-slate-900 rounded-md flex justify-center items-center">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
