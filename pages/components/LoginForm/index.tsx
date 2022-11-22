import React, { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

interface ILoginForm {
  handleSubmit: () => void;
  token?: string;
}

export const LoginForm: React.FC<ILoginForm> = ({ handleSubmit, token }) => {
  const { register } = useForm();
  const [email, setEmail] = useState<string>("");
  const [isVisibleInput, setIsVisibleInput] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [error, setError] = useState();

  const handleSignIn = () => {
    window.event?.preventDefault();
    signIn("email", { email: email });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <Head>
          <title>Login</title>
        </Head>

        <div className="max-w-sm w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white-900">
              Faça login com a sua senha
            </h2>
          </div>
          <form
            method="post"
            action="/login"
            className="mt-8 space-y-6"
            onSubmit={() => handleSignIn}
          >
            <input name="csrfToken" type={"hidden"} defaultValue={token} />
            <div className="rounded-md shadow-sm -space-y-px ">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Usuário
                </label>
                <input
                  {...register("email")}
                  id="email-address"
                  name="email"
                  value={email}
                  onChange={(Text) => {
                    setEmail(Text.target.value);
                  }}
                  type="email"
                  autoComplete="email"
                  required
                  className=" rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Usuário"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => handleSignIn()}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </span>
                {isVisibleInput ? "Verificar código" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
