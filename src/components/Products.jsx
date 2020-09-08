import React from "react";

const Products = (props) => {
  const { products } = props;
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product._id}>
            <div className="product">
              <a href={"#" + product._id}>
                <img src={product.image} alt=""></img>
                <p>{product.title}</p>
              </a>
              <div className="products__product_price">
                <div>{product.price}</div>
                <button className="products__addtocart">Add To Cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
