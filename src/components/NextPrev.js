import React from 'react';
import '../styles/NextPrevBtn.css';

export default function NextPrev({ lastValue, setLastValue }) {
  const eventNext = () =>
    setLastValue((prev) => (prev >= 1540 ? prev : prev + 20));

  const eventPrev = () => setLastValue((prev) => (prev <= 0 ? 0 : prev - 20));

  return (
    <div className="change-images">
      {lastValue <= 0 ? (
        <button onClick={eventPrev} disabled>
          Prev
        </button>
      ) : (
        <button onClick={eventPrev}>Prev</button>
      )}
      {lastValue >= 1540 ? (
        <button onClick={eventNext} disabled>
          Next
        </button>
      ) : (
        <button onClick={eventNext}>Next</button>
      )}
    </div>
  );
}
