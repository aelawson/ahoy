import * as React from "react";

const styles = require("./header.module.less");

class ReleaseHeader extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.container}>
        <h1>
          Team Name
        </h1>
        <h2>
          Release Phase
        </h2>
        <h2>
          Release Plan
        </h2>
      </div>
    )
  }
}

export default ReleaseHeader;
