import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Layout
import Layout from "./components/Layout/Layout";
//Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Videos from "./pages/Videos/Videos";
import People from "./pages/People/People";
import Documents from "./pages/Documents/Documents";
//Context

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Videos" component={Videos} />
          <Route exact path="/People" component={People} />
          <Route exact path="/Documents" component={Documents} />
        </Switch>
      </Router>
    </Layout>

  );
}

export default App;
