import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledFormHeader = styled.p`
  color: #756c6c91;
  text-align: center;
  font-size: 32px;
  @media (max-width: 744px) {
    font-size: 18px;
    margin: 5px 10px 30px;
  }
  @media (max-width: 414px) {
    font-size: 18px;
    margin: 5px 10px 30px;
  }
`;

export const TotalLabel = styled.p`
  align-self: flex-start;
  font-size: 24px;
  margin: 12px 0 45px;
  @media (max-width: 744px) {
    font-size: 18px;
    margin: 0 10px 30px;
  }
  @media (max-width: 414px) {
    font-size: 18px;
    margin: 0 10px 30px;
  }
`;
