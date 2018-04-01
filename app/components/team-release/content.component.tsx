import * as React from "react";
import {Card, CardTitle, CardText, CardHeader} from 'material-ui/Card';

import Repositories from './repositories';

const styles = require("./content.component.less");

class Content extends React.Component<any, any> {
  render() {
    return (
      <Card className="section">
        <CardTitle
          title="Release Plan"
          subtitle="Configure release and execute action items"
        />
        <CardText>
          <Repositories/>
        </CardText>
      </Card>
    )
  }
}

export default Content;
