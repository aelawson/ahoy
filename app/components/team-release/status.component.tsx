import * as React from "react";
import {
  Card,
  CardBody,
  Row,
  Col
} from 'reactstrap';

const styles = require("./status.module.less");

class ReleaseStatus extends React.Component<any, any> {
  render() {
    return (
      <Row>
        <Col sm="4">
          <h3>Release Status</h3>
          <Card className={'section ' + styles.releaseStatus}>
            <CardBody>
              Current Stage: <span className={styles.development}>Development</span>
              <br/>
              Next Stage: <span className={styles.staging}>Staging</span>
              <br/>
              Will Occur On: November 4
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default ReleaseStatus;
