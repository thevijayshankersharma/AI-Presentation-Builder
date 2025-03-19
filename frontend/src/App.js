import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/Toaster";
import { PresentationProvider } from "./contexts/PresentationContext";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PresentationProvider>
        <Router />
        <Toaster />
      </PresentationProvider>
    </QueryClientProvider>
  );
}

export default App;
