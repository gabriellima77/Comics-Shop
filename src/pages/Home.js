import React from 'react';

export default class Home extends React.Component {
  render() {
    const { setPage } = this.props;
    return (
      <main className="container">
        <h1>O melhor dos quadrinhos está aqui!</h1>
        <div className="btnContainer">
          <button onClick={() => setPage('comics')}>Ver os quadrinhos!</button>
        </div>
      </main>
    );
  }
}
