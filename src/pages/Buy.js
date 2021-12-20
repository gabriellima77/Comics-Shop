import React, { useState } from 'react';
import Map from '../components/Map';
import '../styles/Buy.css';

export default function Buy({ content }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [hasToChange, setHasToChange] = useState(false);
  const { title, thumbnail, prices } = content;
  const { path, extension } = thumbnail;

  const confirmEvent = () => {
    if (address) setHasToChange(true);
    else setMessage('Nenhum Endereço selecionado');
  };

  const getConfirmScreen = () => {
    const n = name ? name : 'Anônimo';
    let addss = 'CE, Cidade Fantasma, Bairro Desconhecido, Rua dos bobos, n° 0';
    if (address) {
      addss = `${address[4].short_name}, ${address[3].long_name}, ${address[2].long_name}, ${address[1].long_name}, n° ${number}`;
    }
    return (
      <div className="center-box">
        <p>A compra de {title} foi feita com sucesso!</p>
        <p>Compra feita por {n}.</p>
        <p>Será entregue no endereço {addss}.</p>
      </div>
    );
  };

  const getMainScreen = () => {
    return (
      <div className="expand-box">
        <h2>Confirmar Entrega</h2>
        <div className="upper-box">
          <img width={width} height={height} src={getImgUrl()} alt={title} />
          <div className="input-box">
            <p className="buy-title">{title}</p>
            <div className="name-div">
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
              {address ? (
                <div className="address-box">
                  <p>
                    {address[5].long_name}, {address[3].long_name}-
                    {address[4].short_name}.
                  </p>
                  <p>CEP: {address[6].long_name}.</p>
                  <p>
                    Endereço: {address[1].long_name}, {address[2].long_name}
                  </p>
                  <label className="label" htmlFor="number">
                    Número:
                  </label>
                  <input
                    id="number"
                    type="text"
                    className="address-input"
                    placeholder="Endereço"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
              ) : (
                <p className="no-address">{message}</p>
              )}
            </div>
            <div className="buy-price">
              Preço: <span>$ {prices[0].price}</span>{' '}
              <span className="color">Grátis</span>.
            </div>
          </div>
        </div>
        <h3 className="map-label">Selecione o seu Endereço</h3>
        <Map setAddress={setAddress} setNumber={setNumber} />
        <button onClick={confirmEvent} className="confirm-btn">
          Confirmar
        </button>
      </div>
    );
  };

  // Imagens diferentes por tamanho de tela
  const bodyWidth = document.querySelector('body').offsetWidth;

  const getImgUrl = () => {
    let size = bodyWidth > 1024 ? '/portrait_uncanny.' : '/portrait_medium.';
    size = bodyWidth <= 500 ? '/portrait_medium.' : size;
    return path + size + extension;
  };

  const getWidthHeight = () => {
    let width = bodyWidth > 1440 ? '300px' : '150px';
    let height = bodyWidth > 1440 ? '450px' : '225px';
    width = bodyWidth <= 500 ? '100px' : width;
    height = bodyWidth <= 500 ? '150px' : width;
    return { width, height };
  };

  const { width, height } = getWidthHeight();

  return (
    <main className="container">
      <div className="buy-container">
        {hasToChange ? getConfirmScreen() : getMainScreen()}
      </div>
    </main>
  );
}
