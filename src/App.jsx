import MaalPage from './MaalPage';
import SetBudget from './setBudget';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const PageCondition = localStorage.getItem('FirstTime');
  return(
    <Router>
      <Routes>
        {PageCondition ? <Route path="/" element={<MaalPage />} /> : <Route path="/" element={<SetBudget />} /> }
      </Routes>
    </Router>
  );
  
}

export default App





/*
if(PageCondition){
  
  return(<MaalPage/>);
  }
  else if(!PageCondition){
    
  return(<SetBudget/>);
  }
  
  */ 
 
  // const [page , setPage] = useState(<SetBudget/>);