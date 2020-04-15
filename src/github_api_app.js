import React from 'react';
import axios from 'axios';
import './github_cards.css';


  const testData = [
      {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
      {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
  ];

const CardList = (props) => (
    <div>
      {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
         </div>
  // the ... is a spread operator: un strucrute
  // the map creates an array and react can read this. 
  )

class Card extends React.Component {
  render(){  
    const profile = this.props;
    return(
    <div className="github-profile">
      <img src = {profile.avatar_url} />
      <div className="name"> {profile.name}</div>
      <div className="Company"> {profile.company} </div>      
    <div/>
    </div>
    )
  }
}


class Form extends React.Component {
  state = {userName: ''}
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)  
    this.props.onSubmit(resp.data)
    this.setState({userName: ""})

  } ;

  render(){
  return (
    <form onSubmit={this.handleSubmit}>
    <input 
      type="text" 
      placeholder="Github username" 
      value={this.state.userName}
      onChange={event => this.setState({userName: event.target.value})}
      required/>
    <button> Add card </button>

    </form>
  )

  }

}

class App extends React.Component{
 /* 
  constructor(props){
    super(props);
    this.state ={
      profiles: testData,
    };
  }
*/
  // easyer:
  state = {
    profiles:testData,
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
    console.log('App', profileData)

  };

  render(){
    return(
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles} />
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