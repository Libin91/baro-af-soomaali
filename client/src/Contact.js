import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className="form-container">
            <form id="contact" action="" method="post">
                <h3>For further information, you can contact us here:</h3>
                <fieldset>
                    <input placeholder="Your name" type="text"/>
                <fieldset>
                    <input placeholder="Your email address" type="email"/> 
                </fieldset>
                <fieldset>
                    <textarea placeholder="Type your Message Here...." />
                </fieldset>

                </fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
