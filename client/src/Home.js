import React from 'react'
import SignUp from './SignUp';

function Home() {
    return (
        <div>
           
            <h1 className="intro">Welcome to Baro Af-Soomaali</h1>
      <p>This is an app where you can learn the Somali language through short and engaging stories.</p>
      <p>  You can read the stories in Somali, but if you need some help, you can read them in English too, then, test your understanding
        with a quiz! 
      </p>
      <div className="newsletter">
      <p>Sign up to receive tips on how to improve your Somali!</p>        
       <SignUp />
      </div>
        </div>
    )
}

export default Home
