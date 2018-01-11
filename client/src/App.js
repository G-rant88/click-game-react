import React, { Component } from 'react';
import './App.css';
import items from "./items.json";
import ItemCard from "./components/itemCard.js";
import { shake } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import axios from 'axios';

const styles = {
  shake: {
    animation: 'x 1s',
    animationName: Radium.keyframes(shake, 'shake')
  }
}


class App extends Component {

state = {
    items,
    Score: 0,
    TopScore: 0,
    correct: "",
    user: "Ben",
    color: "white",
    shouldShake: false,
    newTopScore: false,
    topUser: ""
  };

    shuffleItems = () => {
    
    const items = this.state.items.map(a =>
      [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);

  this.setState({ items });
  };


  addScore = (val) => {
    
  const value = parseInt(val);

    for (let i = 0; i < items.length; i++) {

  if (items[value].clicked === true){

     this.setState({

     	correct: "Wrong Choice! Game Over!",
     	shouldShake: true
     })
       



  if(this.state.Score > this.state.TopScore){
     this.state.TopScore = this.state.Score;

        this.setState({

     	correct: "Wrong Choice! New Top Score!!!",
     	shouldShake: true,
     	newTopScore: true
     })
       
   }
    this.setState({ Score: 0 });

for (let i = 0; i < items.length; i++) {

  items[i].clicked = false;

  }
  return false;
}

    }
  

   this.state.Score = this.state.Score + 1;
   this.state.correct = "Correct Choice! You Got a Point!";

   items[value].clicked = true;

    this.setState({

    	shouldShake: false

    });


  };

     inputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

getUser = () => {


	axios.get("/users").then(data => {

		console.log("test");
		console.log(data);

		// for (var i = 0; i < data.length; i++) {
		

		// }

		// this.setState({

		// 	user: data.user,
		// 	TopScore: data.score
		// })

	});
}

  score = () => {

const data = {

	user: this.state.topUser,
	score: this.state.TopScore
}

	this.setState({

		user: this.state.topUser
	})

axios.post("/user", data).then( data => {

this.setState({

	newTopScore: false,
	correct: "Name Submitted! Click an Image to Play Again!",
})


})

  };

componentDidMount(){

	this.getUser();
}



  render() {
    return (
      <div>
      <div className="navbar-fixed">
       <nav>
    <div className="nav-wrapper">
      <a href="" className="brand-logo logo">Star Wars Game</a>
      <a className="brand-logo center">{this.state.correct}</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>Your Score: {this.state.Score}</li>
        <li>|</li>
        <li>Top Score: {this.state.TopScore}</li>
        <li>User: {this.state.user}</li>
      </ul>
    </div>
  </nav>
  </div>
  <div className="container">
 

<div className="row">
<div className="col s12 top z-depth-2">
<h2 className="center">The Good Star Wars Movies - Memory Click Game</h2>
<h4 className="center">Click on an image to earn points, but don't click the same image more than once!</h4>
</div>
</div>

{this.state.newTopScore ? 

(
<div className="row">
<div className="col s12 center">
<h4>Enter Your Name For the New Top Score!</h4>
</div>
<form className="center">
 <div className="input-field col s6 offset-s3">
          <input id="text" type="text" name="topUser" onChange={this.inputChange}
          placeholder="Name"/>
    </div>
    </form>
  <div className="col s12 center">
    <h4><a className="btn" onClick={this.score}>Submit</a></h4>
</div>
</div>
)
:
(
	"")
}



 <StyleRoot>

 {this.state.shouldShake ? (
<div className="row content"  style={styles.shake}>

 {this.state.items.map(item => (
<ItemCard 
  alty={item.name} 
  keyy={item.id} 
  srcy={item.image}
  clicky={item.clicked}
  shuffle={this.shuffleItems}
  add={this.addScore}
/>
))}
</div>

)
:(

<div className="row content">
 {this.state.items.map(item => (
<ItemCard 
  alty={item.name} 
  keyy={item.id} 
  srcy={item.image}
  clicky={item.clicked}
  shuffle={this.shuffleItems}
  add={this.addScore}
/>
))}
</div>

)
}

 </StyleRoot>
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