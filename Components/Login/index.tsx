import Link from 'next/link';
import * as React from 'react';
import Button from './Button';
import Input from './Input';
import Form from './styled/Form';
import JoinUs from './styled/JoinUs';
import LinkWrapper from './styled/LinkWrapper';
import LoginContainer from './styled/LoginContainer';
import RegisterHref from './styled/RegisterHref';

const Login = ({ isRegistration }: { isRegistration?: boolean }) => {
  return (
    <>
      <LoginContainer>
        <Form>
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Hasło" type="password" />
          <Button text={isRegistration ? 'Załóż konto' : 'Zaloguj się'} />
        </Form>
        <LinkWrapper>
          {isRegistration ? (
            <>
              <h2>Masz juz konto ?</h2>
              <RegisterHref>
                <Link href="/logowanie">Zaloguj się</Link>
              </RegisterHref>
            </>
          ) : (
            <>
              <h2>Nie masz jeszcze konta ?</h2>
              <RegisterHref>
                <Link href="/rejestracja">Załóż je tutaj</Link>
              </RegisterHref>
            </>
          )}
        </LinkWrapper>
      </LoginContainer>
      <JoinUs>
        <h2>
          {isRegistration
            ? 'Załóż konto w naszym serwisie, aby móc obstawiać mecze CS:GO'
            : 'Zaloguj się, aby móc obstawiać mecze CS:GO'}
        </h2>
      </JoinUs>
    </>
  );
};

export default Login;
{
  /* <h2>Załóż konto w naszym serwisie, aby móc obstawiać mecze CS:GO</h2> */
}
