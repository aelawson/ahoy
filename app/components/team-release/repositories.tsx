import * as React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText, CardTitle} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';

const styles = require("./repositories.module.less");

class Repositories extends React.Component<any, any> {
  render() {
    return (
      <Card className={styles.releaseRepositories}>
        <CardTitle
          title="Select Repositories"
          subtitle="Selected repositories will be included for release"
        />
        <CardText>
          <List>
            <ListItem primaryText="UnifiedDashboard" leftCheckbox={<Checkbox/>}/>
            <ListItem primaryText="Portal-API" leftCheckbox={<Checkbox/>}/>
            <ListItem primaryText="Checkout-UI" leftCheckbox={<Checkbox/>}/>
            <ListItem primaryText="AdminDashboard" leftCheckbox={<Checkbox/>}/>
          </List>
          <RaisedButton className={styles.buttonSubmit} label="Select" primary={true}/>
        </CardText>
      </Card>
    );
  }
}

export default Repositories;
