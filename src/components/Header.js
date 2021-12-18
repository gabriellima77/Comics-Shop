export default function Header({ page, setPage }) {
  const clickEvent = (e) => {
    let p = 'home';
    if(e.target.textContent === 'Personagens') p = 'characters';
    else if(e.target.textContent === 'Quadrinhos') p = 'comics';
  };

  return (
    <header className="nav-bar">
      <h2>Comics-Shop</h2>
      <nav className="links">
        <ul>
          <li className="link" onClick={clickEvent}>
            Home
          </li>
          <li className="link" onClick={clickEvent}>
            Personagens
          </li>
          <li className="link" onClick={clickEvent}>
            Quadrinhos
          </li>
        </ul>
      </nav>
    </header>
  );
}
