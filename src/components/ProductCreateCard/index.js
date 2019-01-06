import React, {useState} from "react";
import { useReducer } from '../../store';
// import Input from '../Input';
import Button from '../Button';
import "./index.scss";

const ProductCreateCard = ({ imgSrc, name, actionLabel, actionBtnClass }) => {
  const [state, dispatch] = useReducer();
  const { products } = state;

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  
  const handleProductAction = () => {
    const product = {
      imgSrc: '',
      name: productName,
      description: productDescription,
      pricePerQuantity: productPrice
    };
    const updatedProducts = [...products, product];
    dispatch({products: updatedProducts});

    setProductName('');
    setProductDescription('');
    setProductPrice('');
  }

  const handleImage = (e) => {
  //   const files = Array.from(e.target.files);
  //   const formData = new FormData();

  //   files.forEach((file, i) => {
  //     formData.append(i, file);
  //   });
  }

  return (
    <div className="new-product">
      <img
        className="new-product__img"
        src={imgSrc} />
      <input
        type="file"
        onChange={handleImage} />
      <input
        value={productName}
        placeholder="Product Name..."
        onChange={(e) => setProductName(e.target.value)} />
      <input
        value={productDescription}
        placeholder="Product Description..."
        onChange={(e) => setProductDescription(e.target.value)} />
      <input
        value={productPrice}
        placeholder="Product Price Per Quantity..."
        onChange={(e) => setProductPrice(e.target.value)} />
      <Button
        label={actionLabel}
        customClass={actionBtnClass}
        handleClick={handleProductAction} />
    </div>
  )
}

export default ProductCreateCard;