import { useParams } from "react-router-dom";
import catalog from "../data/catalog.json";
import Button from "./Button";
import MultipleImageSlider from "./Slider"

export default function ProductDetails() {
  const { productId } = useParams();
  const product = catalog.find((item) => item.id === productId);

  const productImages = product.images;
  return (
    <div className="container">
      {product && (
        <div className="product">
          <div className="product-about">
          <MultipleImageSlider images={productImages}  />
            <div className="product-about-info">
              <h2>{product.title}</h2>
              <p className="product-about-info-dscrpt">{product.description}</p>
              <p className="product-about-info-price"> {product.price}</p>
              <Button
                target="_blank"
                text="Напиши нам"
                href="https://linktr.ee/mykolabms?fbclid=IwAR2QkY5twHhM8sxCaaVCwG8PhdH_upFxFDYUDKRGpB5WbXe0q2Fpfr5Zs-I"
              />
            </div>
          </div>
          <ul className="product-details">
            {Object.entries(product.composition).map(([key, value]) => (
              <li className="product-details-item" key={key}>
                <h3 className="product-details-item-title">
                  {key === "size" ? "Розмір:" : ""}
                  {key === "material" ? "Матеріал:" : ""}
                  {key === "color" ? "Колір:" : ""}
                  {key === "features" ? "Головні особливості:" : ""}
                  {key === "application" ? "Застосування:" : ""}
                  {key === "care" ? "Догляд:" : ""}
                </h3>
                <p className="product-details-item-text">{value}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!product && <p>Product not found</p>}
    </div>
  );
}
