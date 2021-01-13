import React, { useState, useEffect } from 'react';
import './App.css';

// import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import About from './About';
import Stories from './Stories';
import Contact from './Contact';
import Footer from './Footer';
//Pages
import Dhegdheer from './pages/Dhegdheer';
import QaybLibaax from './pages/QaybLibaax';
import QolofDiin from './pages/QolofDiin';
//English translations
import DhegdheerEng from './pages/DhegdheerEng';
import QaybLibaaxEng from './pages/QaybLibaaxEng';
import QolofDiinEng from './pages/QolofDiinEng';

//Quizzes
import DhegdheerQuiz from './pages/quizzes/DhegdheerQuiz';
import QaybLibaaxQuiz from './pages/quizzes/QaybLibaaxQuiz';
import QolofDiinQuiz from './pages/quizzes/QolofDiinQuiz';


// SERVICES
import userService from './services/userService';

function App() {
  const [users, setusers] = useState(null);

  useEffect(() => {
    if (!users) {
      getusers();
    }
  });

  const getusers = async () => {
    let res = await userService.getAll();
    setusers(res);
  };

  const renderUser = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
          ${user.last_name}`}
        </h3>
        <p>{user.location}</p>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {users && users.length > 0 ? (
          users.map((user) => renderUser(user))
        ) : (
          <p></p>
        )}
      </ul>

      <BrowserRouter>
      <div className="App">
      <Header />
      <Route exact path ="/" component = { Home } />
      <Route path ="/about" component = { About } />
      <Route path = "/stories" component = { Stories } />
      <Route path ="/contact" component = { Contact } /> 
      <Route path ="/pages/dhegdheer" component = { Dhegdheer } />
      <Route path ="/pages/qayblibaax" component = { QaybLibaax } />
      <Route path = "/pages/qolofdiin" component = { QolofDiin } />
      <Route path = "/pages/dhegdheereng" component = { DhegdheerEng } />
      <Route path = "/pages/qayblibaaxeng" component = { QaybLibaaxEng } />
      <Route path = "/pages/qolofdiineng" component = { QolofDiinEng } />
      <Route path = "/pages/quizzes/dhegdheerquiz" component = { DhegdheerQuiz } />
      <Route path = "/pages/quizzes/qayblibaaxquiz" component = { QaybLibaaxQuiz } />
      <Route path = "/pages/quizzes/qolofdiinquiz" component = { QolofDiinQuiz } />
      <Footer />


      </div>
      </BrowserRouter>
    </div>
  )
        };
  
        

  
        
  

export default App;
