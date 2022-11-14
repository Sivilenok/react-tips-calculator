import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  padding: 20px 20px;
  margin-bottom: 30px;
  border: none;
  border-radius: 35px;
  text-align: center;
  font-size: 18px;
  color: #756c6c;

  @media (max-width: 744px) {
    width: 331px;
    border-radius: 30px;
  }
  @media (max-width: 414px) {
    width: 331px;
    border-radius: 30px;
  }
`;
