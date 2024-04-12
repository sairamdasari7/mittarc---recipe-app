// frontend/src/components/Register.js
import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration request:', this.state);
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleInputChange} />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
