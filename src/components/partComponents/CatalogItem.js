import Button from "./Button";

export default function CatalogItem({ product, onClick }) {
  return (
    <li key={product.id} className="catalog-item">
      <div className="catalog-item-div-img">
        <img
          className="catalog-item-image"
          src={product.mainImage}
          alt={product.title}
          loading="lazy"
          width={300}
          height={600}
        />
      </div>
      <div className="catalog-item-info">
        <h3 className="catalog-item-title">{product.title}</h3>
        <p className="catalog-item-price">{product.price}</p>
      </div>
      <Button
        onClick={() => onClick(product.id)}
        text="Детальніше"
        href={`/product/${product.id}`}
        target="_self"
      />
    </li>
  );
}
