import * as React from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';

class NavBar extends React.Component<any, any> {
  render() {
    return (
      <AppBar
        title="Ahoy"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}
export default NavBar;