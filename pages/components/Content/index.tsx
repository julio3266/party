import { signOut } from "next-auth/react";
import React from "react";

interface IContentProps {}

const Content: React.FC<IContentProps> = () => {
  return (
    <>
      <button
        onClick={() => signOut()}
        type="submit"
        className="flex float-right py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sair
      </button>
      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
        Bem vindo
      </h1>
      <h2 className="text-md text-gray-400">
        Gerencie listas de convidados, listas de compras, estoque, horários,
        local e etc...
      </h2>
      <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
        <div className="w-full md:w-6/12">
          <div className="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
            <a href="#" className="w-full h-full block">
              <div className="flex items-center justify-between px-4 py-6 space-x-4">
                <div className="flex items-center">
                  <span className="rounded-full relative p-5 bg-yellow-100">
                    <svg
                      width={40}
                      fill="currentColor"
                      height={40}
                      className="text-yellow-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                    </svg>
                  </span>
                  <p className="text-sm text-gray-700 dark:text-white ml-2 font-semibold border-b border-gray-200">
                    Meta de orçamento
                  </p>
                </div>
                <div className="border-b border-gray-200 mt-6 md:mt-0 text-black dark:text-white font-bold text-xl">
                  R$ 10.000,00
                  <span className="text-xs text-gray-400">/R$ 25.000,00</span>
                </div>
              </div>
              <div className="w-full h-3 bg-gray-100">
                <div className="w-2/5 h-full text-center text-xs text-white bg-green-400"></div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex items-center w-full md:w-1/2 space-x-4">
          <div className="w-1/2">
            <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
              <p className="text-2xl text-black dark:text-white font-bold">5</p>
              <p className="text-gray-400 text-sm">Depósitos feitos</p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
              <p className="text-2xl text-black dark:text-white font-bold">
                R$ 22.000,00
              </p>
              <p className="text-gray-400 text-sm">
                Total previsto para em gastos
              </p>
              <span className="rounded-full absolute p-4 bg-purple-500 top-2 right-4">
                <svg
                  width={40}
                  fill="currentColor"
                  height={40}
                  className="text-white h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        <div className="w-full">
          <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
            <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
              Dados de teste
            </p>
            <div className="flex items-end space-x-2 my-6">
              <p className="text-5xl text-black dark:text-white font-bold">0</p>
              <span className="text-green-500 text-xl font-bold flex items-center">
                <svg
                  width={20}
                  fill="currentColor"
                  height={20}
                  className="h-3"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                </svg>
                0%
              </span>
            </div>
            <div className="dark:text-white">
              <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>User paid</p>
                <div className="flex items-end text-xs">
                  21
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    0%
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                <p>Income</p>
                <div className="flex items-end text-xs">
                  10
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-green-500"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    2%
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                <p>Royal tees</p>
                <div className="flex items-end text-xs">
                  0
                  <span className="flex items-center">
                    <svg
                      width={20}
                      fill="currentColor"
                      height={20}
                      className="h-3 text-red-500 rotate-180 transform"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                    </svg>
                    0%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
