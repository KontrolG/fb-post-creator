import React, { useState } from "react";
import Button from "../../Button";
import { useUserContext } from "../../../contexts/UserContext";
import { Form, Input } from "../../form";
import FormErrorMessage from "./FormErrorMessage";

const LoginForm = props => {
  const { login } = useUserContext();

  const sendUser = event => {
    const { email, password } = formState;
    const formUser = { email, password };
    // login(formUser);
  };

  const formValidations = {
    email: {
      isEmail: "Debes introducir un correo electrónico"
    },
    password: {
      isRequired: "Debes introducir una contraseña"
    }
  };

  return (
    <Form className="users-form" onSubmit={sendUser} validate={formValidations}>
      <div className="wrapper">
        <label htmlFor="email">Correo electronico</label>
        <Input
          type="email"
          name="email"
          placeholder="Introduce tu correo electronico"
        />
        <FormErrorMessage fieldName="email" />
      </div>
      <div className="wrapper">
        <label htmlFor="password">Contraseña</label>
        <Input
          type="password"
          placeholder="Introduce tu contraseña"
          name="password"
        />
        <FormErrorMessage fieldName="password" />
      </div>
      <Button type="submit" primary>
        Iniciar Sesión
      </Button>
    </Form>
  );
};

export default LoginForm;
