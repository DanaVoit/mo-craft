import catalog from "../components/data/catalog.json";
import { useState } from "react";
import Button from "./Button";

export default function Catalog() {
  const [filter, setFilter] = useState("all");

  const filteredProducts = () => {
    if (filter === "all") {
      return catalog;
    } else {
      return catalog.filter((product) => product.category === filter);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="container catalog">
      <div className="catalog-nav">
        <a
          className={`catalog-nav-item ${filter === "all" ? "active" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          Всі{" "}
        </a>
        <a
          className={`catalog-nav-item ${filter === "ремені" ? "active" : ""}`}
          onClick={() => handleFilterChange("ремені")}
        >
          Ремені
        </a>
        <a
          className={`catalog-nav-item ${filter === "гаманці" ? "active" : ""}`}
          onClick={() => handleFilterChange("гаманці")}
        >
          Гаманці
        </a>
        <a
          className={`catalog-nav-item ${filter === "сумка" ? "active" : ""}`}
          onClick={() => handleFilterChange("сумка")}
        >
          Сумки
        </a>
      </div>

      <ul className="catalog-list">
        {filteredProducts().map((product) => (
          <li key={product.id} className="catalog-item">
            <div className="catalog-item-div-img">
              <img
                className="catalog-item-image"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="catalog-item-info">
              <h3 className="catalog-item-title">{product.title}</h3>
              <p className="catalog-item-price">{product.price}</p>
            </div>
            <Button text="Детальніше" />
          </li>
        ))}
      </ul>
    </div>
  );
}
