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
      <div >
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4"> </h1>
            <p class="lead"> </p>
          </div>
        </div>
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
      <footer>
        <div className="footer text-center mb-5" >
          <p></p>
          <p> Copyright © 2023    TOASTIE+CAFÉ  ■  Web Design: fpsingcak@gmail.com </p>
          <p></p>
        </div>    
      </footer>
    </>
      



    )
}

export default Home;
