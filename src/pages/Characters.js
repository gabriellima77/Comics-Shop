import React, { useEffect, useState } from 'react';
import getData from '../components/FetchData';
import useLoading from '../components/useLoading';
import Card from '../components/Card';
import NextPrev from '../components/NextPrev';

export default function Characters() {
  const { isLoading, setIsLoading, getLoading } = useLoading();
  const [characters, setCharacters] = useState([]);
  const [lastValue, setLastValue] = useState(0);

  useEffect(() => {
    const result = getData('characters', lastValue);
    setIsLoading(true);
    result.then((response) => {
      const { results } = response.data.data;
      setIsLoading(false);
      setCharacters(results);
    });
  }, [lastValue, setIsLoading]);

  const getCards = () => {
    const cards = characters.map((character) => {
      const { name, thumbnail, id } = character;
      const { path, extension } = thumbnail;
      const imgUrl = path + '/portrait_xlarge.' + extension;
      return <Card key={id} title={name} url={imgUrl} />;
    });
    return cards;
  };

  return (
    <main className="container">
      <div className="container row">
        {isLoading ? getLoading() : getCards()}
      </div>
      {isLoading ? null : (
        <NextPrev lastValue={lastValue} setLastValue={setLastValue} />
      )}
    </main>
  );
}
