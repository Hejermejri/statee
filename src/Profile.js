import React, { useState } from"react";
const Profile = (props) => {
   
   const [timer,settimer]=useState(1);
   setInterval(() => {
    settimer(timer+1)
    
  },1000)
return ( 
    <>
     <h1>the name is {props.fullName}</h1>
     <h1>the name is {props.bio}</h1>
     <h1>the name is {props.profession}</h1>
     <h1>time {timer}</h1>
    
     </>
  );
}
 
export default Profile;