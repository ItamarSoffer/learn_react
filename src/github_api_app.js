import React from 'react';
import './github_cards.css';

// card
// list

class Card extends React.Component {

  render(){
    return(
    <div className="github-profile">
      <img src = "https://placehold.it/75" />
      <div className="name"> Name here... </div>
      <div className="Company"> company here... </div>      
    <div/>
    </div>
    )
  }
}


class App extends React.Component{
  render(){
    return(
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
      )
  }
}


class GitApp extends React.Component
{
  render(){
    return (
      <App title="The GitHub Cards App" />
      )
  }
}

export default GitApp
// ========================================
/*
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
*/