import React, { Component } from 'react';
import './App.css';
import items from "./items.json";
import ItemCard from "./components/itemCard.js";

class App extends Component {

state = {
    items
  };

    shuffleItems = () => {
    
    const items = this.state.items.map(a =>
      [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);

  this.setState({ items });
  };

  render() {
    return (
      <div>
      <div className="navbar-fixed">
       <nav>
    <div className="nav-wrapper">
      <a href="" className="brand-logo logo">Star Wars Game</a>
      <a className="brand-logo center">Guess Here</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>Score: 0</li>
        <li>|</li>
        <li>Top Score: 0</li>
      </ul>
    </div>
  </nav>
  </div>
  <div className="container">
<div className="row">
<div className="col s12 top z-depth-2">
<h2 className="center">Star Wars - The Good Ones - Memory Click Game</h2>
<h4 className="center">Click on an image to earn points, but don't click the same image more than once!</h4>
</div>
</div>
<div className="row content">
 {this.state.items.map(item => (

<ItemCard 
  alty={item.name} 
  keyy={item.id} 
  srcy={item.image}
  shuffle={this.shuffleItems}
/>
))}

</div>
</div>

<footer className="page-footer">
  <div className="footer-copyright">
            <div className="container">
            Made By Ben Grant © 2018
            </div>
          </div>
       </footer>
  </div>

    )
  }
}

export default App;
