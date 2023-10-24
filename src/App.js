import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12;
  apikey = process.env.REACT_APP_NEWS_API_KEY

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News apikey={this.apikey} setProgress={this.setProgress} key='general' country='in' pageSize={this.pageSize} category='general' />}></Route>
            <Route exact path="/business" element={<News apikey={this.apikey} setProgress={this.setProgress} key='business' country='in' pageSize={this.pageSize} category='business' />}></Route>
            <Route exact path="/entertainment" element={<News apikey={this.apikey} setProgress={this.setProgress} key='entertainment' country='in' pageSize={this.pageSize} category='entertainment' />}></Route>
            <Route exact path="/general" element={<News apikey={this.apikey} setProgress={this.setProgress} key='general' country='in' pageSize={this.pageSize} category='general' />}></Route>
            <Route exact path="/health" element={<News apikey={this.apikey} setProgress={this.setProgress} key='health' country='in' pageSize={this.pageSize} category='health' />}></Route>
            <Route exact path="/science" element={<News apikey={this.apikey} setProgress={this.setProgress} key='science' country='in' pageSize={this.pageSize} category='science' />}></Route>
            <Route exact path="/sports" element={<News apikey={this.apikey} setProgress={this.setProgress} key='sports' country='in' pageSize={this.pageSize} category='sports' />}></Route>
            <Route exact path="/technology" element={<News apikey={this.apikey} setProgress={this.setProgress} key='technology' country='in' pageSize={this.pageSize} category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

