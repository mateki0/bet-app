import * as React from 'react';
import ButtonWrapper from './styled/ButtonWrapper';
import StyledButton from './styled/StyledButton';

const Button = ({ text }: { text: string }) => {
  return (
    <ButtonWrapper>
      <StyledButton type="submit">{text}</StyledButton>
    </ButtonWrapper>
  );
};

export default Button;
