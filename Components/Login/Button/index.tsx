import * as React from 'react';
import ButtonWrapper from './styled/ButtonWrapper';
import StyledButton from './styled/StyledButton';

interface ButtonProps {
  text: string;
  handleSign: (e: { preventDefault: () => void }) => void;
}
const Button = ({ text, handleSign }: ButtonProps) => {
  return (
    <ButtonWrapper>
      <StyledButton type="submit" onClick={handleSign}>
        {text}
      </StyledButton>
    </ButtonWrapper>
  );
};

export default Button;
