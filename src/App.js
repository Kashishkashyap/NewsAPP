// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = ()=>{
  const pageSize=6
  const apiKey= '6866bd4e2ab14005b74bd321838f9db0'
  
  const[progress,setProgress]=useState(0)

    return (
      <>
      <Router>
      <LoadingBar
      height={3}
      color='#f11946'
      progress={progress}
      />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={pageSize} country='us' category='general' />}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey}  key='business' pageSize={pageSize} country='us' category='business' />}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key='entertainment' pageSize={pageSize} country='us' category='entertainment' />}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey}  key='health' pageSize={pageSize} country='us' category='health' />}></Route>
          {/* <Route exact path='/general' element={<News setProgress={setProgress}  key='general' pageSize={12} country='us' category='general' />}></Route> */}
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey}  key='science' pageSize={pageSize} country='us' category='science' />}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey}  key='sports' pageSize={pageSize} country='us' category='sports' />}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey}  key='technology' pageSize={pageSize} country='us' category='technology' />}></Route>
        </Routes>
      </Router>
  </>
    )
  
}

export default App;
