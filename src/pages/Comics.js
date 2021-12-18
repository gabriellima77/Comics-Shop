import React from 'react';
import Filter from '../components/Filter';
import getData from '../components/FetchData';

export default class Comics extends React.Component {
  render() {
    return (
      <main className="container">
        <Filter />
      </main>
    );
  }
}
