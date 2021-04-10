import React from"react";
import './App.css';
import Profile from './Profile';



class App extends React.Component  {
  
  state = {
    fullName: "Sara",
    bio:"student",
    imgsrc:"",
    profession:"student",
    show: false,
    timer:1
  };


render(){
  
  return(
    <>
    <button onClick={()=>this.setState({show:!this.state.show})}>  profile </button> {console.log(this.state.show)}
    {this.state.show?(
      <Profile fullName={this.state.fullName} bio={this.state.bio} imgsrc={this.state.imgsrc} profession={this.state.profession}/>

    ): ""}
</>
  );

 }

}

export default App;
