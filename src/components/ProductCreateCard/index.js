import React, {useState} from "react";
import { connect } from 'react-redux';
import { productsSelector } from '../../selectors';
import { updateProducts } from '../../actions';
// import Input from '../Input';
import Button from '../Button';
import "./index.scss";

const ProductCreateCard = ({ imgSrc, actionLabel, actionBtnClass, products, onUpdatedProducts }) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productMetrix, setProductMetrix] = useState('');
  const [productMinQuantity, setProductMinQuantity] = useState('');

  const handleProductAction = () => {
    const product = {
      imgSrc: '',
      name: productName,
      description: productDescription,
      price: productPrice,
      metrix: productMetrix,
      quantity: productMinQuantity
    };
    const updatedProducts = [...products, product];
    onUpdatedProducts(updatedProducts);

    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductMetrix('')
    setProductMinQuantity('')
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
        placeholder="Product Price Per Unit..."
        onChange={(e) => setProductPrice(e.target.value)} />
      <input
        value={productMetrix}
        placeholder="Product Metrix..."
        onChange={(e) => setProductMetrix(e.target.value)} />
      <input
        value={productMinQuantity}
        placeholder="Product Min Quantity..."
        onChange={(e) => setProductMinQuantity(e.target.value)} />
      <Button
        label={actionLabel}
        isDisabled={productName === '' || productDescription === '' || productPrice === '' || productMetrix === '' || productMinQuantity === ''}
        customClass={actionBtnClass}
        handleClick={handleProductAction} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: productsSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  onUpdatedProducts: (data) => dispatch(updateProducts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreateCard);