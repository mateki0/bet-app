import Link from 'next/link';
import * as React from 'react';
import Button from '../Login/Button';
import Input from '../Login/Input';
import Form from '../Login/styled/Form';

import LinkWrapper from '../Login/styled/LinkWrapper';
import LoginContainer from '../Login/styled/LoginContainer';
import RegisterHref from '../Login/styled/RegisterHref';
import { auth } from '../../firebase';

const Registration = () => {
  const [inputsContent, setInputsContent] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: '',
      password: '',
    }
  );
  const { email, password } = inputsContent;

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    setInputsContent({
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(`Email lub hasło są nieprawidłowe, ${error}`));
    window.location.href = '/logowanie';
  };
  return (
    <>
      <LoginContainer>
        <Form>
          <Input name="email" label="E-mail" type="email" handleInputChange={handleInputChange} />
          <Input
            name="password"
            label="Hasło"
            type="password"
            handleInputChange={handleInputChange}
          />
          <Button text="Załóż konto" handleSign={handleSignUp} />
        </Form>
        <LinkWrapper>
          <h2>Masz juz konto ?</h2>
          <RegisterHref>
            <Link href="/logowanie">Zaloguj się</Link>
          </RegisterHref>
        </LinkWrapper>
      </LoginContainer>
    </>
  );
};

export default Registration;
