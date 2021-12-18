export default function BuyBtn({ price, event }) {
  return (
    <div className="buy-box">
      <p className="price">${price}</p>
      <button
        onClick={() => {
          event();
        }}
        className="buy-btn"
      >
        Comprar
      </button>
    </div>
  );
}
