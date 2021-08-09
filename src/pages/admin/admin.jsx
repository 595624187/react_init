import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Admin extends Component {
  render() {
    return (
      <Link to='/login'>跳转到login</Link>
    );
  }
}

export default Admin;