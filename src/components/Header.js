export default function Header({ page, setPage }) {
  const clickEvent = (e) => {
    let p = 'home';
    if (e.target.textContent === 'Personagens') p = 'characters';
    else if (e.target.textContent === 'Quadrinhos') p = 'comics';
    setPage(p);
  };

  let homeClass = `link ${page === 'home' ? ' active' : ''}`;
  let charactersClass = `link ${page === 'characters' ? ' active' : ''}`;
  let comicsClass = `link ${page === 'comics' ? ' active' : ''}`;

  return (
    <header className="nav-bar">
      <h2>Comics-Shop</h2>
      <nav className="links">
        <ul>
          <li className={homeClass} onClick={clickEvent}>
            Home
          </li>
          <li className={charactersClass} onClick={clickEvent}>
            Personagens
          </li>
          <li className={comicsClass} onClick={clickEvent}>
            Quadrinhos
          </li>
        </ul>
      </nav>
    </header>
  );
}
