import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';




function MediaCard(profile) {
  
  profile={
  profilePic:"https://avatars.githubusercontent.com/u/38328235?s=460&u=236d8f1460cc7795d6345410aae26482b3eb1633&v=4",
  date: new Date().toLocaleTimeString(),
  title:"FaceBook Media Card",
  imgUrl:"https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg",
  body:"Hi users",
  userName:"Sheikh Ahmer Ali"
  
  }
  
    return<div className="root">
      <div className ="header">
        <div className="profilepic" ><img src={profile.profilePic} />
         <spna className="userName">{profile.userName}</spna>
        <div className="time" >{profile.date}</div>
        </div>
        <h2 className="title" >{profile.title}</h2>
  
  
      </div>
      <div className="frame">
  
  
      <p className="body">{profile.body}</p>
      <div><img className="img" src={profile.imgUrl} /></div>
      </div>
      <br />
    </div>
  
  }
  






//////////////////////////////////////////////////////////////////////////////

  function Lit() {
    const [isLit,setlit] =useState(true);
    const brightness = isLit ? "lit" : "dark"
    
    // console.log(brightness)
    // console.log(`${brightness}`)

        return <div >   
        <div  className={`new ${brightness}`}>
          <button onClick={() => setlit(prev=>{
            return !prev
          })}>Change The COLOR</button> 
          <MediaCard/>
         </div>
        </div>
  }

  ReactDOM.render(<Lit />,document.getElementById("root"))