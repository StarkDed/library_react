import "./header.css";
import SortingSvg from "../../assets/svg/SortingSvg.jsx";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>Library</h1>
        <button className="btn-catalog">Каталог</button>
        <div className="search-container">
          <input placeholder="Поиск" type="search" />
          <button className="btn-search">Найти</button>
          <SortingSvg className="sorting-icon" />
        </div>
        <button className="btn-login">Войти</button>
      </div>
    </header>
  );
};

export default Header;
