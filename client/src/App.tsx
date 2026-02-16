import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/not-found";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;