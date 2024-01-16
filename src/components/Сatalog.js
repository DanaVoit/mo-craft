import catalog from "../components/data/catalog.json";

export default function Catalog(){




    const catalogListItems = catalog.map((data) => (
        <li key={catalog.id} className="catalog-item">
          <div
            className="catalog-item-image"
          />
          <div className="catalog-item-info">
            <h3 className="catalog-item-title">{data.title}</h3>
            <p className="catalog-item-price">${data.price}</p>
          </div>
          <button >Детальніше</button>
        </li>
      ));


      return (
        <div className="container">
            {/* <h3 className="catalog-title">Каталог </h3> */}
            <ul href="#" className="catalog">
                 {catalogListItems}
                </ul>
        </div>
       
      );


}


