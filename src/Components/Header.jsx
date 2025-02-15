import navBarData from "../data/navBarData";

export default function Header() {
  return (
    <header>
      <div className="container-main">
        <div className="nav-container">
          <img className="logo-img" src="./img/dc-logo.png" alt="logo"></img>
          <nav className="nav-header">
            <ul>
              {navBarData.map((navBar) => {
                return (
                  <li key={navBarData.id}>
                    <a href={navBar.url}>{navBar.text}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className="hero"></div>
    </header>
  );
}
