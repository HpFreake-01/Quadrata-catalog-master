import React,
{
  Component
} from 'react';

import './App.css';

import Menu from './components/Menu';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";

const STATE = require('./State.json');

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
          <div className="App">

            <Menu items={STATE.sitemap} />

            <div className="main_content">
              {this.props.children}
            </div>
          </div>
            <Footer/>
        </div>
      
    );
  }
}

export default App;
