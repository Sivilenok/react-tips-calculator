import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  padding: 13px 0;
  border: none;
  font-size: 24px;
  color: #FFFFFF;
  background-color: #2ED2C9;
  cursor: pointer;
  transition: 0.3s;

  :hover{
    opacity: 0.9;
  }

  :active{
    opacity: 0.7;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 744px) {
    width: 321px;
    height: 61px;
    font-size: 18px;
  }
  @media (max-width: 414px) {
    width: 321px;
    height: 61px;
    font-size: 18px;
  }
`;
