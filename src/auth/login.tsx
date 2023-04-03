import * as React from "react";
import { auth } from "../config/config";
import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "F:/Codig/pj_00/src/style/LoginStyle.css";

const H1 = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
`;

function Login() {
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const movePage = useNavigate();

  const OnChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setLogInEmail(value);
  };

  const OnLogInPassword = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setLogInPassword(value);
  };

  const LogOut = async () => {
    await signOut(auth);
  };

  const loginBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, logInEmail, logInPassword)
      .then(() => {
        movePage("/");
        alert("ss");
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" action="">
        <H1>로그인</H1>
        <input
          value={logInEmail}
          className="loginInputEmail"
          type="email"
          placeholder="이메일"
          onChange={OnChangeEmail}
          required={true}
        />
        <input
          value={logInPassword}
          className="loginInputPassword"
          type="password"
          placeholder="비밀번호"
          onChange={OnLogInPassword}
          minLength={6}
          maxLength={10}
          required={true}
        />
        <button onClick={loginBtn} className="loginBtn">
          로그인
        </button>
        <Link className="lPsiginup" to="/signup">
          회원가입
        </Link>
        <button onClick={LogOut}>로그아웃</button>
      </form>
    </div>
  );
}

export default Login;
