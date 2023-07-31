import React, { useState } from "react";

function PasswordUpdate() {
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false); // true, false

  const handleChange = ({ target: { value } }) => setPassword(value);

  const handleSubmit = async (event) => {
    // async 있는 함수는 내부에 비동기 처리할 일 있어
    // 랜더링 출력 시간차 발생 예고
    setDisabled(true); // 리액트 생태계상 중복해서 데이터 넘어가지 않도록 일단 버튼 활성시키지마
    event.preventDefault(); // 중복 제출 방지


    //폼태그의 input들의 name 만 호출해도 알아듣는다
    if (password.length < 8) {
      alert("8자 이상의 비밀번호를 사용하셔야 합니다.");
    } else {
        // 비동기 객체 Promise 메서드
      await new Promise((r) => setTimeout(r, 1_000));
      alert(`변경된 비밀번호: ${password}`);
    }
    setDisabled(false); // 다시 버튼기능 회복
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="password" value={password} onChange={handleChange} />
      <button type="submit" disabled={disabled}>
        비밀번호 변경
      </button>
    </form>
  );
}