import React from 'react'
import { NavLink } from 'react-router-dom';

function QolofDiin() {
    return (
        <div>
            <h1>Qolof Diin</h1>
            <h6><NavLink to = "/pages/qolofdiineng">Read it in English</NavLink></h6>
            <p>Waxaa la yiri diinka markii hore ma lahayn qolofta adag oo ku daboolan. Jirkiisu wuxuu ahaa baruur aan jiir lahayn.</p>
            <p>Habeen habeenada ka mid ah ayaa dugaagtii oo dhammi tashatay. Waxay go’aansadeen in koodi ugu soo horreeya subaxdii uu diinka cuno. Isla habeennimadii ayaa dawaco diinkii u timid.</p>
            <p>“Diinoow, waxaan guddoonsannay in kaayagii kuugu soo hor-mara subixii ku cuno. Marka, sidee yeelaysaa?” ayay dawacadii ku tiri.</p>
            <p>Wuxuu ku yiri:</p>
            <p>“Meeshii la iiga tashanayay Ilaahay ma joogay?”</p>
            <p>“Maya” ayay tiri.</p>
            <p>“Go’aankiinu ma suurto geli karo.” ayuu ku yiri.</p>
            <p>Dawacadii way ka tagtay diinkii. Meel u dhow ayay ugu dhuumatay, si aan dugaag kale subaxdii uga soo hor-marin. Subaxdii ayay dawacadii ku soo jarmaadday diinkii. Waxay u timid diinkii oo baruurtiisii qolof weyn oon ilkaha dugaagguu karin ay ku daboolantahay.</p>
            <p>Taasi waxay inoo caddaynaysaa in go’aanka noole meel mari karin haddaan Eebe aqbalin.</p>

            <button><NavLink to="/pages/quizzes/qolofdiinquiz">Test your knowledge with a quiz!</NavLink></button> 

        </div>
    )
}

export default QolofDiin
