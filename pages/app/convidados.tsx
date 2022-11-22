/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import { Button } from "pages/components/Button";
import MainLayout from "pages/components/MainLayout";
import { Modal } from "pages/components/Modal";
import { Form } from "pages/components/Form";

const convidados: React.FC = () => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();
  const [active, setActive] = useState<boolean>(false);

  const handleModalActive = useCallback(() => {
    setActive(!active);
  }, [active]);

  const onSubmit = (data: any) => console.log(data);

  return (
    <MainLayout>
      <Button
        title="cadastrar"
        handleModal={() => {
          handleModalActive();
        }}
      />
      <Modal handleClose={() => handleModalActive()} active={active}>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          title="Cadastrar um novo convidado"
          buttonTitle="Cadastrar"
        >
          <input
            {...register("firstName")}
            type="text"
            id="create-account-pseudo"
            required={true}
            className=" rounded-lg border-transparent flex-1 appearance-none border mb-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name={"firstName"}
            placeholder={"Primeiro Nome"}
          />
          <input
            {...register("lastName")}
            type="text"
            id="create-account-pseudo"
            required={true}
            className=" rounded-lg border-transparent flex-1 appearance-none border mb-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name={"lastName"}
            placeholder={"Sobrenome"}
          />

          <input
            {...register("email")}
            type="text"
            id="create-account-pseudo"
            required={true}
            className=" rounded-lg border-transparent flex-1 appearance-none border mb-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name={"email"}
            placeholder={"E-mail"}
          />
          <input
            {...register("phoneNumber")}
            type="text"
            id="create-account-pseudo"
            required={true}
            className=" rounded-lg border-transparent flex-1 appearance-none border mb-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name={"phoneNumber"}
            placeholder={"Telefone"}
          />
          <input
            {...register("fiscalCode")}
            type="text"
            id="create-account-pseudo"
            required={true}
            className=" rounded-lg border-transparent flex-1 appearance-none border mb-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name={"fiscalCode"}
            placeholder={"CEP"}
          />
          <input
            {...register("address")}
            type="text"
            id="create-account-pseudo"
            required={true}
            className=" rounded-lg border-transparent flex-1 appearance-none border mb-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name={"address"}
            placeholder={"Logradouro"}
          />
        </Form>
      </Modal>
    </MainLayout>
  );
};

export default convidados;
