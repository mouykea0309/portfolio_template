// /* @refresh reload */

import { render } from "solid-js/web";
import App from "./App";
import { Route, Router } from "@solidjs/router";

import Home from "./components/Home";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import WorkDetail from "./components/WorkDetail";
 const root = document.getElementById("root")!;
render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/workdetail" component={WorkDetail} />
    </Router>
  ),
  root
);



