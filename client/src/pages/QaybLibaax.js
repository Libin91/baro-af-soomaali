import React from 'react'
import { NavLink } from 'react-router-dom';

function QaybLibaax() {
    return (
        <div>
            <h1>Qayb Libaax</h1>
            <h6><NavLink to = "/pages/qayblibaaxeng">Read it in English</NavLink></h6>
            <p>Waa baa waxaa jirtay in dugaagga dhan ay disheen neef xoolo ah. Markaas ayay isugu soo uruureen si ay u qaybsadaan.
                 Waxaa dhacday, libaaxii oo boqor u ah xayawaanka, ayuu wuxuu yiri:</p>
            <p>“Dhurwaayoow, inoo qaybi neefka.”</p>
            <p>Dhurwaagii ayaa neefka hilbihiisii kala baray.</p>
            <p>“Bar” ayuu yiri, “Libaaxoow, qaado. Barka kalana dugaagga intiisa kale sii.”</p>
            <p>Libaaxii ayaa qaybtaas ka xanaaqay, dhurwaagi buu dharbaaxo xun ku dhuftay. Markaas ayuu dhurwaagii xanuunsaday oo ka tegey.</p>
            <p>Libaaxii haddana  wuxuu qaybtii u dhiibay dawaco. Dawaca neefkii hilbihiisa oo dhan qayb ahaan waxay u siisay libaaxa. Markaas ayaa libaaxii inta qoslay,  yiri:</p>
            <p>“Dawacooy, yaa ku baray qaybtaan cadaalada ah?”</p>
            <p>Waxay tiri:</p>
            <p>“Waxaa i bartay dhaban dhurwaa dharbaxadii ku dhacday!”</p>
            <button><NavLink to="/pages/quizzes/qayblibaaxquiz">Test your knowledge with a quiz!</NavLink></button> 

        
        </div>
    )
}

export default QaybLibaax
