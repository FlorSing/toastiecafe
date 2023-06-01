import React from "react";

import './home.css';
import sandwich from '../../assets/sandwich.jpg';
import drinks from '../../assets/drinksmain.jpg';
import spaghetti from '../../assets/spaghettiwithtoast.jpg';
import crisps from '../../assets/crispsiwthdip.jpg';
import bread from '../../assets/toastbread.jpg';
import drinkstower from '../../assets/drinkstower.jpg'

function Home(){
    return (

    <>
      <div className="container logo" >
      <div className="row">
        <div className="col">
            <h1 className="logotext1" >TOASTIE</h1> 
            <h1 className="logotext2"><em>+</em>CAFÉ</h1>
        </div>
        <div className="col">
            <p className="sublogotext">EGG TOAST </p>
            <p className="sublogotext">MON FRAPPE  </p>
            
        </div>
      </div>
      </div>
      <div>
      </div>
      <div className='sandwich'>  
        <img alt='sandwich' src={sandwich}/>
        <img alt='spaghetti' src={spaghetti}/>  
        <img alt='drinks' src={drinks}/>  
        <img alt='crisps' src={crisps}/>
        <img alt='bread' src={bread}/>  
        <img alt='sandwich' src={sandwich}/>
        <img alt='spaghetti' src={spaghetti}/>  
        <img alt='drinks' src={drinks}/>  
        <img alt='crisps' src={crisps}/>
        <img alt='bread' src={bread}/>  
        <img alt='drinks' src={drinkstower}/>  
      </div>

    </>
      



    )
}

export default Home;
