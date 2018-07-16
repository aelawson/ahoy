import * as React from 'react';

import { Button, InputGroupText, InputGroupAddon } from 'reactstrap';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';

const styles = require("./repositories.module.less");

class Repositories extends React.Component<any, any> {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>Select Repositories</CardTitle>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input addon type="checkbox" aria-label="Dashboard"/>
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Dashboard" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input addon type="checkbox" aria-label="API"/>
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="API" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input addon type="checkbox" aria-label="Admin"/>
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Admin" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input addon type="checkbox" aria-label="Checkout"/>
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Checkout" />
          </InputGroup>
          <Button color="primary">Release</Button>
        </CardBody>
      </Card>
    );
  }
}

export default Repositories;
