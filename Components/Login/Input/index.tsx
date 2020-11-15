import * as React from 'react';
import InputContainer from './styled/InputContainer';
import LabelWrapper from './styled/LabelWrapper';
import StyledInput from './styled/StyledInput';
import StyledLabel from './styled/StyledLabel';
import ValidationError from './styled/ValidationError';

interface InputProps {
  name: string;
  label: string;
  type: string;
}

const Input = ({ name, label, type }: InputProps) => {
  return (
    <InputContainer>
      <LabelWrapper>
        <StyledLabel>{label}</StyledLabel>
        <ValidationError></ValidationError>
      </LabelWrapper>
      <StyledInput name={name} id={name} type={type} />
    </InputContainer>
  );
};

export default Input;
