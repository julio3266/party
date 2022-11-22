import React from "react";

interface IFormProps {
  title?: string;
  subtitle?: string;
  buttonTitle: string;
  children?: React.ReactNode;
  onSubmit?: (data: any) => void;
}

export const Form: React.FC<IFormProps> = ({
  title,
  subtitle,
  buttonTitle,
  children,
  onSubmit,
}) => {
  return (
    <div className="flex flex-col max-w-md px-4 py-8  rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
      {title && (
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          {title}
        </div>
      )}
      {subtitle && (
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          {subtitle}
        </span>
      )}

      <div className="p-6 mt-8">
        <form onSubmit={onSubmit} action="#">
          <div className="flex flex-col mb-2">
            <div className=" relative ">{children}</div>
          </div>

          <div className="flex w-full my-4">
            <button
              type="button"
              className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              {buttonTitle}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
