import catalog from "../data/catalog.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CatalogItem from "./CatalogItem";

export default function Catalog() {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const filteredProducts = () => {
    if (filter === "all") {
      return catalog;
    } else {
      return catalog.filter((product) => product.category === filter);
    }
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
          <CatalogItem
            key={product.id}
            product={product}
            onClick={handleProductClick}
          />
        ))}
      </ul>
    </div>
  );
}
