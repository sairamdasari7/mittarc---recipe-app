// frontend/src/components/RecipeList.js
import React from 'react';
import mockProducts from '../mockProducts';
import './RecipeList.css';


class RecipeList extends React.Component {
  state = {
    products: mockProducts
  };

  render() {
    return (
      <div className="recipe-list-container">
        <h2>Product List</h2>
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecipeList;
