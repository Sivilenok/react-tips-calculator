import React, { ChangeEvent } from 'react';
import { StyledSelect } from './styledSelect'

interface ICustomProps {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const CustomSelect = ({ onChange }: ICustomProps) => {
  return (
    <StyledSelect onChange={onChange}>
      <option value={1.1}>10%</option>
      <option value={1.15}>15%</option>
      <option value={1.2}>20%</option>
    </StyledSelect>
  )
}
