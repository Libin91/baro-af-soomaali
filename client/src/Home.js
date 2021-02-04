import React from 'react'
import SignUp from './SignUp';
import "./Home.css"

function Home() {
    return (
        <div className="home-container">
           
            <h1>Welcome to Baro Af-Soomaali</h1>
            <div className="intro">
      <p>  This is an app where you can learn the Somali language through short and engaging stories.</p>
      <p>  You can read the stories in Somali, but if you need some help, you can read them in English too<br />
           and test your understanding with a quiz! 
      </p>
      </div>
      <div className="newsletter">
      <p>Sign up for our newsletter to receive tips on how to improve your Somali!</p>        
       <SignUp />
      </div>
        </div>
    )
}

export default Home
