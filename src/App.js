import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  newsInOnePage = 9;
  apiKey = process.env.REACT_APP_NEWS_API_KEY
  
  state = {
    progress : 0,  
  }

  setProgress = (progress) => {
    this.setState({progess : progress})
  }

  render() {
    return (
      <div>
        <Router>
         <Navbar />
         <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progess}
            onLoaderFinished={() => this.setProgress(0)}
        />
          <Routes>
            <Route  path='/' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "general" pageSize = {this.newsInOnePage} country="in" category = "general"/>}/>
            <Route path='/business' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "business" pageSize = {this.newsInOnePage} country="in"   category = "business"/>}/>
            <Route path='/entertainment' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "entertainment" pageSize = {this.newsInOnePage} country="in" category = "entertainment"/>}/>
            <Route path='/health' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "health" pageSize = {this.newsInOnePage} country="in" category = "health"/>}/>
            <Route path='/science' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "science" pageSize = {this.newsInOnePage} country="in" category = "science"/>}/>
            <Route path='/sports' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "sports" pageSize = {this.newsInOnePage} country="in" category = "sports"/>}/>
            <Route path='/technology' element = {<News setProgress = {this.setProgress} apiKey = {this.apiKey} key = "technology" pageSize = {this.newsInOnePage} country="in" category = "technology"/>}/>

          </Routes>

        </Router>
      </div>
    )
  }
}
