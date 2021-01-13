import React from 'react'
import { NavLink } from 'react-router-dom';

function Dhegdheer() {
    
    return (
        <div>
            <h1>Geeridii Dhegdheer</h1>
            <h6><NavLink to = "/pages/dhegdheereng">Read it in English</NavLink></h6>
            <p>Dhegdheer waxay ku noolayd baa la yidhi, meel la yidhaahdo “Boholaha Xergagan”.</p>
            <p>Dhegdheer waxaa la joogtay, baa la yidhi, gabar ay dhashay. Gabadheedu hilibka dadka may cunin jirin, wayna nebcayd hooyadeed.</p>
            <p>Maalin maalmaha ka mid ah waxaa u yimid gabadhii laba caruur oo ambad ah. Gabadhii Dhegdheer dhashay waxay doontay inay ka qariso hooyadeed caruurtii u timid.</p> 
            <p>Markii fiidkii la soo seexday bay Dhegdheer dhiig urisay oo wax dareentay. Waxay weydiisay gabadheedii in hilib dad u uraayo oo meelaha dad ka dhawyihiin.</p>
            <p>Gabadheedii waxay ku tiri: “Waxba kama jiraan.”</p> 
            <p>Gabadha ina-Dhegdheer ahi khadyaan bay ka joogtay hooyadeed, oo waxayna ku rajo weynayd inay khaarajiso mar uun, ooy si uun u disho.
            <p>Markay seexato Dhegdheer, dhegteeda dheer ayaa seexan jirtay oo laalabmi jirtay, marka ay soo jeedana dhegtu waa taagnaan jirtay.</p> 
            <p>Isla habeenkaas, markii ay seexatay kadib, oo ay hubsadeen inay dhegteedi laabantay, Dhegdheer gabadheedii iyo caruurtiiba waxay go’aansadeen inay kharajiyaan.</p>   
            <p>Bir kulul bay soo qabsadeen, dhegtii dheereed bay ka geliyeen. Sidaas bay ku dhimatay Dhegdheer.</p>
            <p>Geerideedi markii la soo ogaaday, gabdhihiii ku noolaa agagaarka “Boholaha Xergagan” waxay ku heeseen: “Dhegdheer dhimatoo, dhulkii nabad!”</p>
</p>

         <button><NavLink to="/pages/quizzes/dhegdheerquiz">Test your knowledge with a quiz!</NavLink></button>   
        </div>
    )
}

export default Dhegdheer;
