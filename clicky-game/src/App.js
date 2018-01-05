import React, { Component } from 'react';

import './App.css';

class App extends Component {
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
<div className="row">
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/akbar.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/boba.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/c3.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/chewy.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/emperor.jpeg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/ewok.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/greedo.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/han.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/jabba.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="images/lando.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/leia.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/luke.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/obiwan.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/r2.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/sand.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/slaveleia.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/storm.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/tauntaun.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/vader.jpg"/></a>
</div>
</div>
<div className="col s3">
<div className="sizing hoverable">
<a href=""><img className="image" src="/images/yoda.jpg"/></a>
</div>
</div>
</div>
</div>

<footer class="page-footer">
  <div class="footer-copyright">
            <div class="container">
            Made By Ben Grant © 2018
            </div>
          </div>
       </footer>
  </div>

    )
  }
}

export default App;
