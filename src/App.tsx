import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyLink = styled(Link)`
  color: ${(prop) => prop.theme.textColor};
  text-decoration: none;
  &:hover {
    font-size: 19px;
  }
`;

function App() {
  const [loading, setLoading] = useState(true);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLoading((loading) => !loading);
  };

  useEffect(() => {}, []);
  return (
    <>
      <MyLink to="login">로그인 페이지로 이동</MyLink>
      <br />
      <MyLink to="signUp">회원 가입 페이지로 이동</MyLink>
      <button onClick={onClick}>Click</button>
      <br />
      {loading ? null : <MyLink to="/coin">Coin 이동하기</MyLink>}
    </>
  );
}

export default App;
