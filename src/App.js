import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Pages/Home/Home.js';
import Quiz from './Pages/Quiz/Quiz.js';
import Result from './Pages/Result/Result.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = '', difficulty = '') => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category &&
        `&category=${category}`}${difficulty &&
        `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundImage:
            'url("https://raw.githubusercontent.com/piyush-eon/Reactjs-Quiz-App/master/public/ques1.png")'
        }}
        className="app"
      >
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz" exact>
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result" exact>
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
