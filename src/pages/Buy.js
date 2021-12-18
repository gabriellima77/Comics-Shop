import React, { useState } from 'react';
import Map from '../components/Map';
import '../styles/Buy.css';

export default function Buy({ content }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const { title, thumbnail } = content;
  const { path, extension } = thumbnail;
  const imgUrl = path + '/portrait_medium.' + extension;
  console.log(content);

  return (
    <main className="container">
      <div className="buy-container">
        <h2>Confirmar Entrega</h2>
        <div className="upper-box">
          <img width="100px" height="150px" src={imgUrl} alt={title} />
          <div className="input-box">
            <p className="buy-title">{title}</p>
            <div>
              <label className="label" htmlFor="name">
                Nome:
              </label>
              <input
                id="name"
                type="text"
                className="name-input"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="label" htmlFor="address">
                Endereço:
              </label>
              <input
                id="address"
                type="text"
                className="address-input"
                placeholder="Endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </div>

        <h3 className="map-label">Selecione o seu Endereço</h3>
        <Map setAddress={setAddress} />
        <button className="confirm-btn">Confirmar</button>
      </div>
    </main>
  );
}
