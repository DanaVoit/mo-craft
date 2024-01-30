import catalog from "../components/data/catalog.json";
import { useState, useEffect } from "react";

export default function Catalog(){


  const [filter, setFilter] = useState('all');

  const filteredProducts = () => {
    if (filter === 'all') {
      return catalog;
    } else {
      return catalog.filter(product => product.category === filter);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (


    <div id="catalog" className="container catalog">
      <div className="catalog-nav">
        <button onClick={() => handleFilterChange('all')}>Всі</button>
        <button onClick={() => handleFilterChange('ремені')}>Ремені</button>
        <button onClick={() => handleFilterChange('гаманці')}>Гаманці</button>
        <button onClick={() => handleFilterChange('інше')}>Інше</button>
      </div>

      <ul className="catalog-list">
      {filteredProducts().map(product => (
          <li key={product.id} className="catalog-item">
            <div className="catalog-item-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="catalog-item-info">
              <h3 className="catalog-item-title">{product.title}</h3>
              <p className="catalog-item-price">${product.price}</p>
            </div>
            <button>Детальніше</button>
          </li>
        ))}
      </ul>
    </div>
  );
      }
