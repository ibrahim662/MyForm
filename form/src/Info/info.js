import styled from "styled-components";
import React, { useState, useEffect } from "react";

export default function Form() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("UserInfo");

    if (data) {
      setItem(JSON.parse(data));
    } else {
      alert("Vous ne pouvez pas accedez a cette page, Elle est vide !");
      window.location.href = "/form";
    }
  }, []);

  const Deletels = () => {
    localStorage.clear();
    alert("Vous avez supprimé vos données !");
    window.location.href = "/form";
  };

  return (
    <div>
      <All>
        {items.map((item) => (
          <div>
            <h1>Votre Nom : {item.name}</h1>
            <h2>Votre Email : {item.email}</h2>
            <h4>Votre numéro de Téléphone : {item.phone}</h4>
          </div>
        ))}
        <button onClick={Deletels}>Supprimer mes données</button>
      </All>
    </div>
  );
}

const All = styled.div`
  text-align: center;
`;
