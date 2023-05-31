import React from "react";
import neon from '../../assets/neontoast.jpg'
import './about.css'

function About(){
    return(
        <>

          <div>
              <h2 className="title">
                <br/>
            </h2>
          </div>


          <div>
              <div className="container" >
                <div className="row">
                  <div className="col" >
                        <h2 className="card-title history-title">Founded in 2021</h2>
                        <br/>
                          <p className="card-text history"> 
                          Started by siblings who had to find a way to continue their passion for delivering great customer service in the fast food industry business...
                          </p>
                    </div>
                  <div className="col">
                    <img src={neon} alt="neonlightbackgroundtoast"></img>
                  </div>
                </div>
              </div>
          </div>

        </>
    )
}

export default About;
