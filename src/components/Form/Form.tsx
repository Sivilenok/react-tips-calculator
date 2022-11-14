import React, { useState, ChangeEvent, useEffect, FormEvent } from "react";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";
import { StyledForm, StyledFormHeader , TotalLabel} from './styledForm';
import { Input } from "../Input/Input";

export const Form = () => {
  const [billValue, setBillValue] = useState<number>();
  const [personsValue, setPersonsValue] = useState<number>();
  const [percent, setPercent] = useState<number>(1.1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleBillChange = (event: ChangeEvent<HTMLInputElement>) => {
    (event?.target?.value && Number(event.target.value) > 0) 
      ? setBillValue(Number(event.target.value)) 
      : setBillValue(0);
  };

  const handlePersonsChange = (event: ChangeEvent<HTMLInputElement>) => {
    (event?.target?.value && Number(event.target.value) > 0)
      ? setPersonsValue(Number(event.target.value)) 
      : setPersonsValue(0);
  };

  const handlePercentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event?.target?.value && setPercent(Number(event.target.value));
  };

  const calculateTips = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (billValue && personsValue) {
      setTotalCount(+billValue / +personsValue * percent);
    }
  }

  useEffect(() => {
   setIsDisabled(!billValue || !personsValue);
  }, [billValue, personsValue]);

  return (
    <StyledForm onSubmit={calculateTips}>
      <StyledFormHeader>Let’s go calculate your tips</StyledFormHeader>
      <Input 
        placeholder='Enter bill' 
        name='bill' 
        value={(billValue && Number(billValue)) ?? null} 
        onChange={handleBillChange} />
      <Input 
        placeholder='Enter persons' 
        name='persons' 
        value={(personsValue && Number(personsValue)) ?? null} 
        onChange={handlePersonsChange} />
      <CustomSelect onChange={handlePercentChange} />
      <TotalLabel>
        Total: {totalCount.toFixed(2)}$
      </TotalLabel>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};
