import * as React from "react";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/config";
import "../style/SignUpStyle.css";
// import ASS from "../img/imgs.jpg";

function SignUp() {
  const movePage = useNavigate();
  const [registerEmail, setEegisterEmail] = useState("");
  const [registerpassword, setRegisterPassword] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const key = "0000000000000000000000001";

  useEffect(() => {
    setRandomNumber(Math.random());
  }, []);
  const OnChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEegisterEmail(value);
  };

  const OnChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setRegisterPassword(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerpassword)
      .then(() => {
        alert("회원 가입 성공");
        window.localStorage.setItem(key, `${randomNumber}`);
        movePage("/login");
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div className="signUpcontainer">
      <form onSubmit={handleSubmit} className="signUpForm">
        <h3 className="signUpH3">회원가입</h3>
        <input
          className="signUpInputEmail"
          type="email"
          placeholder="이메일"
          onChange={OnChangeEmail}
          required={true}
        />

        <input
          className="signUpInputPassword"
          type="password"
          placeholder="비밀번호"
          onChange={OnChangePassword}
          minLength={6}
          maxLength={10}
          required={true}
        />
        <button className="siginUpBtn">계정 생성</button>
      </form>
    </div>
  );
}
export default SignUp;
