import React from "react";
import { Form } from "./components/Form/Form";
import { Wrapper } from "./wrapper";
import GlobalStyle from "./globalStyles";

export const App = () => (
  <>
    <GlobalStyle />
    <Wrapper>
        <h2>Welcome to App</h2>
        <Form />
    </Wrapper>
  </>
  
);
