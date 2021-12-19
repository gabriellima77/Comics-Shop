import React from 'react';
import '../styles/Modal.css';
import BuyBtn from './BuyBtn';

export default function Modal({ content, setHasModal, event, setBuyContent }) {
  const closeModal = (e) => {
    if (e.target.nodeName !== 'SECTION' && e.target.nodeName !== 'BUTTON')
      return;
    if (e.target.nodeName === 'BUTTON' && e.target.className === 'buy-btn')
      return;
    setHasModal(false);
  };

  const getCreators = () => {
    const { creators } = content;
    const results = creators.items.map((item) => {
      const role = item.role[0].toUpperCase() + item.role.substring(1);
      if (role === 'Writer')
        return (
          <p title={`Escritor: ${item.name}.`} key={item.name + item.role}>
            Escritor: {item.name}.
          </p>
        );
      return null;
    });
    return results.filter((p) => p);
  };

  const getDate = () => {
    const { dates } = content;
    const date = dates.find((date) => date.type === 'focDate');
    const dateObj = new Date(date.date);
    const result = dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    if (result === 'Invalid Date') return;
    return result;
  };

  const { title, thumbnail, prices, issueNumber, pageCount } = content;
  const { path, extension } = thumbnail;
  const imgUrl = path + '/portrait_fantastic.' + extension;
  const date = getDate();

  return (
    <section onClick={closeModal} className="cover">
      <div className="modal">
        <div className="modal-bar">
          <button onClick={closeModal} className="close">
            X
          </button>
        </div>
        <div className="comic-box">
          <img
            loading="lazy"
            width="168px"
            height="252px"
            src={imgUrl}
            alt={title}
          />
          <div className="text-box">
            <h2 className="comic-title" title={title}>
              {title}
            </h2>
            <p className="info">Revista: n°{issueNumber}.</p>
            <p className="info">Páginas: {pageCount}</p>
            <div className="creators">{getCreators()}</div>
            <div className="bottom-box">
              {date ? <p className="date">Publicado: {date}</p> : null}
              <BuyBtn
                event={event}
                price={prices[0].price}
                setBuyContent={setBuyContent}
                content={content}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
