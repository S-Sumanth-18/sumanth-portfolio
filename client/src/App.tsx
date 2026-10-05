import { useCallback, useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { Switch, Route } from "wouter";
import { BootSequence } from "./components/BootSequence";
import { KnightAssistant } from "./components/KnightAssistant";
import { CommandPalette } from "./components/CommandPalette";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found";

function App() {
  const [showBoot, setShowBoot] = useState(false);
  const [knightOpen, setKnightOpen] = useState(false);
  const [knightQuestion, setKnightQuestion] = useState<string>();

  useEffect(() => {
    try {
      if (!sessionStorage.getItem("knight-system-ready")) {
        setShowBoot(true);
      }
    } catch {
      setShowBoot(true);
    }
  }, []);

  const finishBoot = () => {
    try {
      sessionStorage.setItem("knight-system-ready", "true");
      } catch {}
      setShowBoot(false);
  };

  const openKnight = useCallback((question?: string) => {
    setKnightQuestion(question);
    setKnightOpen(true);
  }, []);

  const clearKnightQuestion = useCallback(() => setKnightQuestion(undefined), []);

  return (
    <MotionConfig reducedMotion="user">
      <>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/research" component={Research} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <CommandPalette onOpenKnight={openKnight} />
        <KnightAssistant
          open={knightOpen}
          onOpenChange={setKnightOpen}
          initialQuestion={knightQuestion}
          onInitialQuestionHandled={clearKnightQuestion}
        />
        {showBoot && <BootSequence onComplete={finishBoot} />}
      </>
    </MotionConfig>
  );
}

export default App;