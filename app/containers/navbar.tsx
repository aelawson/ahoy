import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class NavBar extends React.Component<any, any> {
  render() {
    return (
      <Navbar color="primary" dark expand="md">
        <NavbarBrand>Ahoy</NavbarBrand>
      </Navbar>
    );
  }
}
export default NavBar;
