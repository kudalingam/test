import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Quiz/components/Home";
import QuizInstructions from "./Quiz/components/quiz/QuizInstructions";
import Play from "./Quiz/components/quiz/Play";
import QuizSummary from "./Quiz/components/quiz/QuizSummary";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/play/instructions" exact component={QuizInstructions} />
        <Route path="/play/quiz" exact component={Play} />
        <Route path="/play/quizSummary" exact component={QuizSummary} />
      </Switch>
    </Router>
  );
}

export default App;
