import * as React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  Row,
  Col
} from 'reactstrap';

import Repositories from './repositories';

const styles = require("./content.component.less");

class Content extends React.Component<any, any> {
  render() {
    return (
      <Row>
        <Col sm="4">
          <h3>Release Plan</h3>
          <Repositories/>
        </Col>
      </Row>
    )
  }
}

export default Content;
