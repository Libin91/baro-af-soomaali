import React from 'react'
import { NavLink } from 'react-router-dom';
import './Stories.css'
import dhegdheer from './dhegdheer.png';
import libaax from './libaax.png'
import diin from './diin.png'


function Stories() {
    return (
        <div>
            <div className="row">
            <div className="column">
               <div className="card">
                   <h2>Geeridii Dhegdheer</h2>
                   <img src = { dhegdheer } alt ="dhegdheer" height= {200} width= {200} />
                   <button><NavLink to="/pages/dhegdheer">Read</NavLink></button>
                </div>
            </div>
            <div className="column">
              <div className="card">
                  <h2>Qayb Libaax</h2>
                  <img src = { libaax } alt = "a lion" height = {200} width = {200} />
                  <button><NavLink to = "/pages/qayblibaax">Read</NavLink></button>
              </div>
            </div>
            <div className="column">
              <div className="card">
                  <h2>Qolof Diin</h2>
                  <button><NavLink to = "/pages/qolofdiin">Read</NavLink></button>
                  <img src = { diin } alt = "a turtle" height = {200} width = {200} />
              </div>
            </div>
              
           </div>
        </div>
    )
}

export default Stories
