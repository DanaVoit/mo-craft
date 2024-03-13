import catalog from "../components/data/catalog.json";
import { useState } from "react";
import Button from "./Button";
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
      <ul className="catalog-nav">
        <li
          className={`catalog-nav-item ${filter === "all" ? "active" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          Всі{" "}
        </li>
        <li
          className={`catalog-nav-item ${filter === "ремені" ? "active" : ""}`}
          onClick={() => handleFilterChange("ремені")}
        >
          Ремені
        </li>
        <li
          className={`catalog-nav-item ${filter === "гаманці" ? "active" : ""}`}
          onClick={() => handleFilterChange("гаманці")}
        >
          Гаманці
        </li>
        <li
          className={`catalog-nav-item ${filter === "сумка" ? "active" : ""}`}
          onClick={() => handleFilterChange("сумка")}
        >
          Сумки
        </li>
        <li
          className={`catalog-nav-item ${filter === "брелки" ? "active" : ""}`}
          onClick={() => handleFilterChange("брелки")}
        >
          Брелки
        </li>
      </ul>

      <ul className="catalog-list">
        {filteredProducts().map((product) => (
          <li key={product.id} className="catalog-item">
            <div className="catalog-item-div-img">
              <img
                className="catalog-item-image"
                src={product.image}
                alt={product.title}
              />
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
            <Button text="Детальніше" />
          </li>
        ))}
      </ul>
    </div>
  );
}
