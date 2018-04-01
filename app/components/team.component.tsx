import * as React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = require("./team.component.less");

const Team = (props: any) => {
  const { name, id, history } = props;

  const goToTeamReleases = () => {
    let url: string = `/teams/${id}`;
    history.push(url);
  };

  return (
    <Card className={styles.cardListItem}>
      <CardHeader
        title={name}
        subtitle="Team description"
        avatar="http://via.placeholder.com/350x150"
      />
      <CardActions>
        <FlatButton label="Releases"
          primary={true}
          onClick={goToTeamReleases}/>
      </CardActions>
    </Card>
  );
};

export default Team;
