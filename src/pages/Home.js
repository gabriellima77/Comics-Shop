import React from 'react';

export default class Home extends React.Component {
  render() {
    const { setPage } = this.props;
    return (
      <main className="container hero">
        <div className="bk-img">
          <h1>O melhor dos quadrinhos está aqui!</h1>
        </div>
        <div className="btnContainer">
          <h2 className="action-txt">Veja todos as nossas incríveis hqs!</h2>
          <div className="large-box">
            <button className="large-btn" onClick={() => setPage('comics')}>
              Ver os quadrinhos!
            </button>
            <span className="first"></span>
            <span className="second"></span>
          </div>
        </div>
      </main>
    );
  }
}
