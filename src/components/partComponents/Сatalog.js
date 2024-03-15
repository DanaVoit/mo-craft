import catalog from "../data/catalog.json";
import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Catalog() {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

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

  const handleProductClick = (productId) => {
    navigate(`/path/to/${productId}`);
  };

  return (
    <div className="container catalog">
      <ul className="catalog-nav">
        {["all", "ремені", "гаманці", "сумка", "брелки"].map((item) => (
          <li
            key={item}
            className={`catalog-nav-item ${filter === item ? "active" : ""}`}
            onClick={() => handleFilterChange(item)}
          >
            {item === "all" ? "Всі" : item}
          </li>
        ))}
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
            </div>
            <div className="catalog-item-info">
              <h3 className="catalog-item-title">{product.title}</h3>
              <p className="catalog-item-price">{product.price}</p>
            </div>
            <Button
              onClick={() => handleProductClick(product.id)}
              text="Детальніше"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
