import React, { Component } from 'react'
import axios from 'axios'
import "./SignUp.css"




export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            email: ''
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeEmail(event) {
        this.setState({
            email:event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            email: this.state.email
        }
        axios.post('http://localhost:5000/api/signUp', registered)
        .then(response => console.log(response.data), alert("You've successfully submitted your email!"))

       this.setState({
           email: ''
       })
    }
    render() {
        return (
            <div>
                <div className="form-container">
                    <form onSubmit={this.onSubmit}>
                        <input type="text"
                        className="email"
                        placeholder= "email"
                        onChange= {this.changeEmail}
                        value = {this.state.email}
                        />
                        <input type="submit" className="submitbtn" value = "Sign Up" />
                    </form>
                </div>
            </div>
        )
    }
}
