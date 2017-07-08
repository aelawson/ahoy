import * as React from "react";
import * as ReactDOM from "react-dom";

import Main from "./components/main";

class App extends React.Component<any, any> {
  render() {
    return (
      <Main/>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
