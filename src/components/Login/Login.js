// frontend/src/components/Login.js
import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login request:', this.state);
    this.props.history.push('/recipes');
  }

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
