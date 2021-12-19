export default function BuyBtn({ price, event, setBuyContent, content }) {

  return (
    <div className="buy-box">
      <p className="price">${price}</p>
      <button
        onClick={() => {
          setBuyContent(content)
          event('buy');
        }}
        className="confirm-btn"
      >
        Comprar
      </button>
    </div>
  );
}
