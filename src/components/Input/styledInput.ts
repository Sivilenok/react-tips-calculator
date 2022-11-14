import styled from "styled-components";

export const StyledInput = styled.input`
  width: 450px;
  max-width: 420px;
  padding: 20px 20px;
  margin-bottom: 30px;
  border: none;
  border-radius: 35px;
  text-align: center;
  font-size: 18px;
  ::placeholder {
    color: #756c6c99;
  }
  appearance: none;

  @media (max-width: 744px) {
    width: 290px;
    font-size: 18px;
  }
`;
