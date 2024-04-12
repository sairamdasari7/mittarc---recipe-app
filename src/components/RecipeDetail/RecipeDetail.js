// frontend/src/components/RecipeDetail.js
import React from 'react';
import mockProducts from '../mockProducts';
import './RecipeDetail.css';


class RecipeDetail extends React.Component {
  state = {
    product: null
  };

  componentDidMount() {
    const productId = parseInt(this.props.match.params.id);
    const product = mockProducts.find(product => product.id === productId);
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    return (
      <div className="recipe-detail-container">
        <h2>Product Detail</h2>
        {product && (
          <div>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
          </div>
        )}
      </div>
    );
  }
}

export default RecipeDetail;
