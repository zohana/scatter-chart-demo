import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/ui/header/Header";
import Footer from "./components/ui/footer/Footer";

const Form = lazy(() => import("./components/form/Form"));
const Chart = lazy(() => import("./components/chart/Chart"));

const App = () => {
  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/chart" component={Chart} />
          </Switch>
        </Suspense>
      </Router>
      <br />
      <Footer />
    </div>
  );
};

export default App;
