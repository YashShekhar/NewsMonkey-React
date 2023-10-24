import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 12;
  const apikey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' height={3} progress={progress} />
        <Routes>
          <Route exact path="/" element={<News apikey={apikey} setProgress={setProgress} key='general' country='in' pageSize={pageSize} category='general' />}></Route>
          <Route exact path="/business" element={<News apikey={apikey} setProgress={setProgress} key='business' country='in' pageSize={pageSize} category='business' />}></Route>
          <Route exact path="/entertainment" element={<News apikey={apikey} setProgress={setProgress} key='entertainment' country='in' pageSize={pageSize} category='entertainment' />}></Route>
          <Route exact path="/general" element={<News apikey={apikey} setProgress={setProgress} key='general' country='in' pageSize={pageSize} category='general' />}></Route>
          <Route exact path="/health" element={<News apikey={apikey} setProgress={setProgress} key='health' country='in' pageSize={pageSize} category='health' />}></Route>
          <Route exact path="/science" element={<News apikey={apikey} setProgress={setProgress} key='science' country='in' pageSize={pageSize} category='science' />}></Route>
          <Route exact path="/sports" element={<News apikey={apikey} setProgress={setProgress} key='sports' country='in' pageSize={pageSize} category='sports' />}></Route>
          <Route exact path="/technology" element={<News apikey={apikey} setProgress={setProgress} key='technology' country='in' pageSize={pageSize} category='technology' />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App;