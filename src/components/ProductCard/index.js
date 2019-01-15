import React from "react";
import Button from '../Button';
import "./index.scss";

const ProductCard = ({ imgSrc, name, description, pricePerQuantity, handleProductAction, actionLabel, actionBtnClass }) => {
  return (
    <div className="product">
      <img className="product__img" src={imgSrc} />
      <div className="product__name">{name}</div>
      <div>{description}</div>
      <div>{pricePerQuantity}</div>
      <Button
        label={actionLabel}
        customClass={actionBtnClass}
        handleClick={() => handleProductAction(name)} />
    </div>
  )
}

export default ProductCard;