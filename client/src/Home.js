import React from 'react'

function Home() {
    return (
        <div>
           
            <h1 className="intro">Welcome to Baro Af-Soomaali</h1>
      <p>This is an app where you can learn the Somali language through short and engaging stories.</p>
      <p>  You can read the stories in Somali, but if you need some help, you can read them in English too, then, test your understanding
        with a quiz! 
      </p>
        <div className="signupform">
          <p>Subscribe to receive our newsletter with advice on how to improve your Somali, tips and tricks and other fun stuff!</p>
          <input placeholder="Your email address" type="email" />
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>

        </div> 
        </div>
    )
}

export default Home
