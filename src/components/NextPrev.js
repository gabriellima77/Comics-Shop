import React from 'react';
import '../styles/NextPrevBtn.css';

export default function NextPrev({ lastValue, setLastValue }) {
  const eventNext = () =>
    setLastValue((prev) => (prev >= 1540 ? prev : prev + 20));

  const eventPrev = () => setLastValue((prev) => (prev <= 0 ? 0 : prev - 20));

  return (
    <div className="change-images">
      {lastValue <= 0 ? (
        <button onClick={eventPrev} aria-label="Prev" disabled>
          <i className="fas fa-arrow-left"></i>
        </button>
      ) : (
        <button onClick={eventPrev} aria-label="Prev">
          <i className="fas fa-arrow-left"></i>
        </button>
      )}
      {lastValue >= 1540 ? (
        <button onClick={eventNext} aria-label="Next" disabled>
          <i className="fas fa-arrow-right"></i>
        </button>
      ) : (
        <button onClick={eventNext} aria-label="Next">
          <i className="fas fa-arrow-right"></i>
        </button>
      )}
    </div>
  );
}
