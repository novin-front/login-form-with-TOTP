import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const chengePageView = (key) => {
    if (key == "Dashboard") {
      setpageView({
        conponentToShwo: < Dashboard / > ,
      });
    }
  }
  const [pageView, setpageView] = useState({
    conponentToShwo : <Login chengePage={chengePageView}/>,
  })
  
  return (
    <div className="container-fluid">
      <div class = "row d-flex justify-content-center align-self-center" >
        
          {pageView.conponentToShwo}
        </div>
      </div>
  );
}

export default App;
