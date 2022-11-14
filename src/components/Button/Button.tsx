import React, { ChangeEvent } from "react";
import { StyledButton } from './styledButton';

interface IProps {
  isDisabled: boolean;
}

export const Button = ({ isDisabled }: IProps) => {
  return (
    <StyledButton disabled={isDisabled} type="submit">
      Ohhhoooo 🍻
    </StyledButton>
  );
};
