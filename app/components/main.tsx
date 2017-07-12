import * as React from "react";

import ReleaseHeader from "./release/header";
import ReleaseContent from "./release/content";

const styles = require("./main.module.less");

class Main extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>Test title</h1>
        <ReleaseHeader></ReleaseHeader>
        <ReleaseContent></ReleaseContent>
      </div>
    )
  }
}

export default Main;
