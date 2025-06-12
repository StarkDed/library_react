import styles from "./catalog.module.css";

import Cross from "../../assets/svg/Cross1/Cross.jsx";

const Catalog = ({ toggleCatalogVisibility }) => {
  const catalogList = [
    { id: 1, name: "Детективы" },
    { id: 2, name: "Исторический детективы" },
    { id: 3, name: "Триллер" },
    { id: 4, name: "Альтернативная история" },
    { id: 5, name: "Научная Фантастика" },
    { id: 6, name: "Классическая проза ХX века" },
    { id: 7, name: "Социально-психологическая фантастика" },
    { id: 8, name: "Авантюрный роман" },
    { id: 9, name: "Исторические приключения" },
    { id: 10, name: "Попаданцы" },
    { id: 11, name: "Приключения" },
    { id: 12, name: "Драма" },
  ];

  return (
    <div className={styles.catalog}>
      <h2 className={styles.title}>Жанры</h2>
      <Cross onClick={() => toggleCatalogVisibility()} />
      <ul className={styles.genres}>
        {catalogList.map((el) => (
          <li className={styles.genreTitle} key={el.id}>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
