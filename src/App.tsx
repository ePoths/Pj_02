import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 15px;
  text-align: center;
  display: block;
`;

const MyLink = styled(Link)`
  color: ${(prop) => prop.theme.textColor};
  text-decoration: none;
  font-size: 20px;
  &:hover {
    font-size: 25px;
  }
`;

function App() {
  const [loading, setLoading] = useState(true);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLoading((loading) => !loading);
  };

  useEffect(() => {}, []);
  return (
    <Container>
      <MyLink to="login">로그인 페이지로 이동</MyLink>
      <br />
      <MyLink to="signUp">회원 가입 페이지로 이동</MyLink>
      <br />
      <br />
      <button onClick={onClick}>Click</button>
      <br />
      {loading ? null : (
        <>
          <br />
          <MyLink to="/coin">Coin 이동하기</MyLink>
        </>
      )}
    </Container>
  );
}

export default App;
