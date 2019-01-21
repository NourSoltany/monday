import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class MyTitle extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(ev) {
    this.refs.myImage.style.width = '900px';
  }

  render() {

    const framework = 'React';

    return (
        <div>
          <button onClick={this.handleClick}>Click me</button>
          <h1 className="green big">Welcome to {framework} world</h1>
          <img src="./images/home.jpg" width="300" height="300" ref="myImage"/>
        </div>
        );
  }
}

class CR7 extends React.Component {

  calculateGoalsRatio(caps, goals) {
    return goals / caps;
  }

  render() {
    const firstName = 'Cristiano';
    const lastName = 'Ronaldo';
    return <h2 className="tahoma" style={ {fontSize: '5vw'} }>{firstName} {lastName} scored {this.calculateGoalsRatio(50, 65)} goals this year</h2>;
  }
}

class Conditional extends React.Component {
  render() {
    const isSeen = false;
    return isSeen && <h2>Now you see me</h2>;
  }
}

class Menu extends React.Component {

  render() {

    const foodStock = [
      {product: 'Milk', quantity: 5},
      {product: 'Beer', quantity: 12},
      {product: 'Bread', quantity: 0},
      {product: 'Sausage', quantity: 4}
    ];

    return <ul>{ foodStock.map(item => <li>{item.product}</li>) }</ul>;
  }


}


ReactDOM.render(<MyTitle />, document.getElementById('app'));
ReactDOM.render(<CR7 />, document.getElementById('ronaldo'));
ReactDOM.render(<Conditional />, document.getElementById('conditional'));
ReactDOM.render(<Menu />, document.getElementById('menu'));
