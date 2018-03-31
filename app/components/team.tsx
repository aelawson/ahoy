import * as React from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';

const styles = require("./team.component.less");

const Team = (props: any) => {
  const { name } = props;

  return (
    <Card>
      <CardTitle
        title={name}
        subtitle="Team description"
      />
      <CardText>
        Team information goes here.
      </CardText>
    </Card>
  );
};

export default Team;
