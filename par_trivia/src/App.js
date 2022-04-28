import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Link,Route} from 'react-router-dom';
import './App.css';
import React from 'react'
import Main from './views/Main';

function App() {
  return (
    <div className="App">
            <div className="navBar">
        <img src="https://clipground.com/images/tees-clipart-16.jpg" className="logo"/>
        <h1>TrivialParsuit</h1>
        <div>
          <Link to="/" className="btn btn-success btn-lg mx-3">Home</Link>
        </div>
      </div>
      <Switch>

      <Route exact path='/'>
        <Main/>
      </Route>

      </Switch>

    </div>
  );
}

export default App;
