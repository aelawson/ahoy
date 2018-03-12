import * as React from "react";

import {Card, CardText, CardHeader, CardTitle} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

const styles = require("./status.module.less");

class ReleaseStatus extends React.Component<any, any> {
  render() {
    return (
      <Card className={'section ' + styles.releaseStatus}>
        <CardTitle
          title="Release Status"
          subtitle="Check here for release metadata and status"
        />
        <CardHeader
          title="Andrew"
          subtitle="Release Manager"
          avatar="http://via.placeholder.com/350x150"
        />
        <CardText>
          Current Stage: <span className={styles.development}>Development</span>
          <br/>
          Next Stage: <span className={styles.staging}>Staging</span>
          <br/>
          Will Occur On: November 4
        </CardText>
      </Card>
    )
  }
}

export default ReleaseStatus;
