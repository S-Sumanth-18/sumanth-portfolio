import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="app-container">
      <Switch>
        {/* These are your two main "Showcase" pages */}
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        
        {/* Fallback for broken links */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;