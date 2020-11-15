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
  handleInputChange: (e: { target: { name: string; value: string } }) => void;
}

const Input = ({ name, label, type, handleInputChange }: InputProps) => {
  return (
    <InputContainer>
      <LabelWrapper>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        <ValidationError></ValidationError>
      </LabelWrapper>
      <StyledInput name={name} id={name} type={type} onChange={handleInputChange} />
    </InputContainer>
  );
};

export default Input;
