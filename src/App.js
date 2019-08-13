import React from "react";
import NoFlexbox from "./NoFlexbox/NoFlexbox";
import YesFlexbox from "./YesFlexbox/YesFlexbox";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/flex" component={YesFlexbox} />
          <Route path="/" component={NoFlexbox} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
