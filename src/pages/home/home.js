import React from "react";

import './home.css';
import sandwich from '../../assets/sandwich.jpg';
import drinks from '../../assets/drinksmain.jpg';
import spaghetti from '../../assets/spaghettiwithtoast.jpg';
import crisps from '../../assets/crispsiwthdip.jpg';
import bread from '../../assets/toastbread.jpg';


function Home(){
    return (

    <>
      <div className="logo" >
            <h1 className="logotext" > TOASTIE </h1> 
            <h1 className="logotext"> <em>+</em>  CAFÉ </h1>
            <p className="sublogotext">EGG TOAST + MON FRAPPE  </p>
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
      </div>

    </>
      



    )
}

export default Home;
