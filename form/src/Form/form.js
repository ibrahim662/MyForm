import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Info() {
  const getStorageValue = (key, defaultValue) => {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [item, setItem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
  };
  useEffect(() => {
    const data = localStorage.getItem("UserInfo");

    if (data) {
      setItem(JSON.parse(data));
    }
  }, []);

  const setData = () => {
    if (name.length !== 0 && email.length !== 0) {
      localStorage.setItem(
        "UserInfo",
        JSON.stringify([...item, { name, email, phone }])
      );
      window.location.href = "/FormInfo";
    } else {
      alert("Nom et Email sont obligatoire !");
    }
  };

  console.log(name, email, phone);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <All>
          <label>
            Nom :
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email :
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Téléphone :
            <Input
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <Link to="/FormInfo">
            <input type="submit" onClick={setData} />{" "}
          </Link>
        </All>
      </form>
    </div>
  );
}

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid green;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    border: 1px solid green;
    background-color: #f2f2f2;

    transition: 0.2s;
    color: black;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: grey;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const All = styled.form`
  text-align: center;
`;
