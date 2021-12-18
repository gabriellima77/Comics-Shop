import React, { useState, useEffect } from 'react';
import Comic from '../components/Comic';
import getData from '../components/FetchData';
import Modal from '../components/Modal';
import NextPrev from '../components/NextPrev';
import SearchBar from '../components/SearchBar';
import useLoading from '../components/useLoading';

export default function Comics({ setPage, setBuyContent }) {
  const { isLoading, setIsLoading, getLoading } = useLoading();
  const [comics, setComics] = useState([]);
  const [lastValue, setLastValue] = useState(0);
  const [search, setSearchValue] = useState('');
  const [hasModal, setHasModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    const result = getData('comics', lastValue, search);
    setIsLoading(true);
    result.then((response) => {
      const { results } = response.data.data;
      setIsLoading(false);
      if (results) setComics(results);
    });
  }, [lastValue, setIsLoading, search]);

  const putModal = (comic) => {
    setHasModal(true);
    setModalContent(comic);
  };

  const getComics = () => {
    const comicsList = comics.map((comic) => {
      const { title, thumbnail, id } = comic;
      const { path, extension } = thumbnail;
      const imgUrl = path + '/portrait_incredible.' + extension;
      return (
        <Comic
          putModal={() => putModal(comic)}
          key={id}
          title={title}
          url={imgUrl}
        />
      );
    });
    return comicsList;
  };

  return (
    <main className="container">
      {hasModal ? (
        <Modal
          event={setPage}
          content={modalContent}
          setHasModal={setHasModal}
          setBuyContent={setBuyContent}
        />
      ) : null}
      <SearchBar setSearch={setSearchValue} setLastValue={setLastValue} />
      <div className="container row">
        {isLoading ? getLoading() : getComics()}
      </div>
      {isLoading ? null : (
        <NextPrev lastValue={lastValue} setLastValue={setLastValue} />
      )}
    </main>
  );
}
