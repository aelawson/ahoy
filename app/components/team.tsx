import * as React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = require("./team.component.less");

const Team = (props: any) => {
  const { name } = props;

  return (
    <Card className={styles.cardListItem}>
      <CardHeader
        title={name}
        subtitle="Team description"
        avatar="http://via.placeholder.com/350x150"
      />
      <CardActions>
        <FlatButton label="Releases" primary={true}/>
      </CardActions>
    </Card>
  );
};

export default Team;
