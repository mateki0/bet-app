import Link from 'next/link';
import * as React from 'react';
import Button from './Button';
import Input from './Input';
import Form from './styled/Form';
import LinkWrapper from './styled/LinkWrapper';
import LoginContainer from './styled/LoginContainer';
import RegisterHref from './styled/RegisterHref';
import { auth } from '../../firebase';

const Login = () => {
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

  const handleSignIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      alert(`Email jest już zajęty, ${error}`);
    });
    auth.onAuthStateChanged((user) => {
      if (user) {
        window.location.href = '/';
      }
    });
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
          <Button text="Zaloguj się" handleSign={handleSignIn} />
        </Form>
        <LinkWrapper>
          <h2>Nie masz jeszcze konta ?</h2>
          <RegisterHref>
            <Link href="/rejestracja">Załóż je tutaj</Link>
          </RegisterHref>
        </LinkWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
{
  /* <h2>Załóż konto w naszym serwisie, aby móc obstawiać mecze CS:GO</h2> */
}
