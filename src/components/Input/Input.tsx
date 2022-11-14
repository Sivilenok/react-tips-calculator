import React, { ChangeEvent } from 'react';
import { StyledInput } from './styledInput';

interface InputProps {
  placeholder: string;
  value: number | null;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, value, name, onChange }: InputProps) => {
  return (
    <StyledInput 
      type='number' 
      placeholder={placeholder} 
      value={value ?? ''}
      onChange={onChange}
      name={name}/>
  )
}
