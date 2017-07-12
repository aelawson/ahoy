import * as React from "react";

const styles = require("./content.module.less");

class ReleaseContent extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.container}>
        <h1>My content</h1>
      </div>
    )
  }
}

export default ReleaseContent;
