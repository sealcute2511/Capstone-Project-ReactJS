import { useEffect, useState } from 'react';
import './index.css';
import Common from '../../utils/common';
import { Stack } from '../../components/UI';
import { ProductBox } from '../../components/ProductBox';
import { ProductList } from '../../components/ProductList';

const DetailPage = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeSelected, setSizeSelected] = useState(null);

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  }

  useEffect(() => {
    const init = async () => {
      const url = Common.getApiUrl('Product/getbyid?id=1')
      const response = await Common.callApiAsync(url);
      setProduct(response.content);
      console.log(response.content);
    }
    init();
  }, []);

  if (!product) return <></>;

  return (
    <div>
      <div id="content-product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
              <div className="box-left box-image-preview">
                <img src={product.image} alt="Preview" />
              </div>
            </div>
            <div className="col-7">
              <div className="box-right box-product-info">
                <div className="title">
                  <h4>{product.name}</h4>
                </div>
                <div className="description">
                  <p>{product.description}</p>
                </div>
                <div className="size">
                  <h5>Available size</h5>
                  <ul className="list-size p-0 m-0">
                    {product.size.map(size => (
                      <li
                        style={size === sizeSelected ? {
                          backgroundColor: '#007bff',
                          color: '#fff'
                        } : {}}
                        onClick={() => setSizeSelected(size)}>
                        {size}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="price">
                  <p>${product.price}</p>
                </div>
                <div className="add-to-cart">
                  <div className="quantity-select">
                    <button className="btn btn-info" onClick={minusQuantity}>
                      <span className="material-icons-outlined">remove</span>
                    </button>
                    <input className="input-quantity" readOnly name="quantity" type="number" value={quantity} />
                    <button className="btn btn-info" onClick={plusQuantity}>
                      <span className="material-icons-outlined">add</span>
                    </button>
                  </div>
                  <div className="button-add-cart">
                    <button className="btn btn-add-to-cart">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '0.75rem' }}>
        <div className="container">
          <h3 style={{ textAlign: 'center', fontWeight: 600 }}>- Realate Product -</h3>
          <ProductList products={product.relatedProducts} />
        </div>
      </div>
    </div>
  )
}

export default DetailPage;
