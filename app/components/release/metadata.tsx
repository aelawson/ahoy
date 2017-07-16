import * as React from 'react';

import Card from 'material-ui/Card';

import ReleaseStatus from './status';
import ReleaseContent from './content';

class ReleaseMetadata extends React.Component<any, any> {
  render() {
    return (
      <div>
        <ReleaseStatus/>
        <ReleaseContent/>
      </div>
    );
  }
}

export default ReleaseMetadata;
