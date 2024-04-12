import React from 'react';
import Register from '../Register';


class MainRegister extends React.Component {
  handleRegisterSuccess = () => {
    // Redirect user to login page
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <Register onRegisterSuccess={this.handleRegisterSuccess} />
      </div>
    );
  }
}

export default MainRegister;
