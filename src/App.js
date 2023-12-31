import React from 'react';
import './App.css';
import Team from './components/Team';
import Header from './components/Header';
import Footer from './components/Footer';




class App extends React.Component{
  constructor(){
  super();
  this.state={
    teams: [
      {
        name: "Barcelona",
        voteCount:0,
        url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSm9-lsMEEaoRzGQ-0VGoiBu28zv8YEBC9qEkQZkaBFlRfW3zIn",
      },
      {
        name: "Manchester UTD",
        voteCount:0,
        url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQo_W63HWRgSEuAEYz6PsJyE7p3QjeT-ne3Kg700XJ5WwAr5NzJ",
      },
      {
        name: "Juventus",
        voteCount:0,
        url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoODZoh49sH57XJ9Y-1FuHl2neQHbsFGLQovKyUhhFuzWFu3hY",
      },
      
    ],
    msg:"Welcome to our board",
    footer:"Hello World Happy New Year",
  };
}
increment = (teamName)=>{
const updatedTeams = this.state.teams.map((team)=>{
  if (team.name===teamName){
    team.voteCount++
  }
  return team;
})
  this.setState({teams:updatedTeams})
}


render(){
  
  const {teams,msg,footer} = this.state;
  return (<div className='App'>
    <Header msg={msg} />
    <Footer footer={footer}/>
  {teams.map((singleTeam)=>{
    return <Team
      // name={singleTeam.name}
      // voteCount={singleTeam.voteCount}
      // url={singleTeam.url}
      {...singleTeam} 
      increment = {this.increment}
      />

  })}

  </div>
  )
  
}
}

export default App;
