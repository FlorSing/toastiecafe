import React from "react";
import './menu.css';
// import newin from '../../assets/newinmenu.jpg';
// import drinks from '../../assets/drinkstower.jpg';



function Menu(){
    return (
    <>
    <div>
        <h2>Our Menu</h2>
    </div>
    <div>
        {/* <img src={newin} alt='newinmenu' id='newin'/> */}
    </div>            
    
    <div className="container menuitems">
 
        <div className="row">
            <div className="col">
                <h3 classNameName="card-title">Ice Cold Drinks</h3>
                <p classNameName="card-text">To keep you cool...</p>
            <div classNameNameName="drinks">
                <div classNameName="card" style={{width: "18rem"}}>
                {/* <img src={drinks} classNameName="card-img-top" alt="..."/> */}
                        
                    <div classNameName="card-body">
                        <h4 classNameName="card-title">Coffee Based</h4>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                                <label className="form-check-label" for="firstCheckbox">Mon Frappe</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                                <label className="form-check-label" for="secondCheckbox">Mon Mocha</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">Mon Oreo Frappe</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">Mon Coffee Jelly</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">Mon Spanish Latte</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">Mon Caramel Macchiato</label>
                            </li>                
                            
                        </ul>
                    </div>

                    <div classNameName="card-body">
                    <h4 classNameName="card-title">Non-Coffee Based</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                            <label className="form-check-label" for="firstCheckbox">Mon Cocoa</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                            <label className="form-check-label" for="secondCheckbox">Dark Cocoa</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                            <label className="form-check-label" for="thirdCheckbox">Oreo Cocoa</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                            <label className="form-check-label" for="thirdCheckbox">Oreo Cream</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                            <label className="form-check-label" for="thirdCheckbox">Oreo Berry</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                            <label className="form-check-label" for="thirdCheckbox">Mon Matcha</label>
                        </li>                
                        
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <div className="col">
                <h3 classNameName="card-title"> </h3>  
                <p classNameName="card-text"> </p>
                <div classNameName="card-body">
                        <h4 classNameName="card-title">Fruit Coolers</h4>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                                <label className="form-check-label" for="firstCheckbox">Green Apple</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                                <label className="form-check-label" for="secondCheckbox">Strawberry</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">Raspberry</label>
                            </li>
                            <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                                <label className="form-check-label" for="thirdCheckbox">Lychee</label>
                            </li>
                            
                        </ul>
                    </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Menu;

