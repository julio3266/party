import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getCsrfToken, getProviders, useSession } from "next-auth/react";

import { LoginForm } from "pages/components/LoginForm";
import { useRouter } from "next/router";

const Login = () => {
  const [token, setToken] = useState<string>();
  const [providers, setProviders] = useState<any>();
  const route = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    const checkStatus = async () => {
      if (status !== "loading") {
        setToken(await getCsrfToken());
      }
      if (status === "authenticated") {
        route.push("/app");
      }
    };
    checkStatus();
  }, [status, providers, token, route]);
  return (
    <>
      <LoginForm handleSubmit={() => console.log("teste")} token={token} />
    </>
  );
};

export default Login;
