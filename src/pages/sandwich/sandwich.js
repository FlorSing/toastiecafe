
import React from "react";
import './sandwich.css';
import toast from '../../assets/toastbread.jpg';
import pasta from '../../assets/spaghettiwithtoast.jpg';
import crisps from '../../assets/crispsiwthdip.jpg';

function Sandwich(){
    return(
    <>
        <div>
            <h2 id="menuhead" >Food Menu</h2>
        </div>

<div className="container menuitems">
    <h3 classNameName="card-title  drinktype">Sandwiches and More</h3>
         <p classNameName="card-text">To your heart's content...</p>
    <div className="row">
        <div className="col">
        <div classNameName="card-body">
            <h4 classNameName="card-title toastie">Toastie</h4>

                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                        <label className="form-check-label" for="firstCheckbox">Ham Is Real</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                        <label className="form-check-label" for="secondCheckbox">Tuna Melt My Heart</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                        <label className="form-check-label" for="thirdCheckbox">Bacon My Love</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                        <label className="form-check-label" for="thirdCheckbox">Spam Me Baby</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                        <label className="form-check-label" for="thirdCheckbox">Chicken Lovers</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                        <label className="form-check-label" for="thirdCheckbox">Supreme Beef Bulgogi</label>
                    </li>                
                 </ul>
                 <br/>
                 <img src={toast} classNameName="card-img-top" alt="toast" id="toast" />
             </div>

        </div>
        <div className="col">
        <div classNameName="card-body">
             <h4 classNameName="card-title  pasta">Pasta</h4>
                 <ul className="list-group">
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                         <label className="form-check-label" for="firstCheckbox">Tuna Olio</label>
                     </li>
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                         <label className="form-check-label" for="secondCheckbox">Chicken Alfredo</label>
                     </li>
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                         <label className="form-check-label" for="thirdCheckbox">Chicken Pesto</label>
                     </li>
                 </ul>
                 <img src={pasta} classNameName="card-img-top" alt="toast" id="pasta" />
        </div>
        <div>
        <br/>
        </div>
        <div classNameName="card-body">
             <h4 classNameName="card-title breadtoast">Bread Toast</h4>
                 <ul className="list-group">
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                         <label className="form-check-label" for="firstCheckbox">Garlic Toast</label>
                     </li>
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                         <label className="form-check-label" for="secondCheckbox">French Toast</label>
                     </li>
                 </ul>
        </div>
        <div>
             <br/>
        </div>
        <div classNameName="card-body">
             <h4 classNameName="card-title  fries">Fries</h4>
                 <ul className="list-group">
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                         <label className="form-check-label" for="firstCheckbox">French Fries</label>
                     </li>
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                         <label className="form-check-label" for="secondCheckbox">Crisscut Fries</label>
                     </li>
                 </ul>
                 <img src={crisps} classNameName="card-img-top" alt="crisps" id="crisps" />
        </div>
    </div>
</div>
</div>



<br/>
<br/>
<div className="container ricemenu">
    <div className="row">
    <div className="col">
    <div classNameName="card-body">
                 <h4 classNameName="card-title rice" >Rice In Cup</h4>
             <ul className="list-group">
                 <li className="list-group-item">
                     <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                     <label className="form-check-label" for="firstCheckbox">Ham</label>
                 </li>
                 <li className="list-group-item">
                     <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                     <label className="form-check-label" for="secondCheckbox">Tuna</label>
                 </li>
                 <li className="list-group-item">
                     <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                     <label className="form-check-label" for="thirdCheckbox">Spam</label>
                 </li>
                 <li className="list-group-item">
                     <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                     <label className="form-check-label" for="thirdCheckbox">Bacon</label>
                 </li>
                 <li className="list-group-item">
                     <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                     <label className="form-check-label" for="thirdCheckbox">Chicken</label>
                 </li>
                 <li className="list-group-item">
                     <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                     <label className="form-check-label" for="thirdCheckbox">Beef</label>
                 </li>                
                 
                 </ul>
             </div>

    </div>
    <div className="col extra">

        <div className="row">
            <div className="col">
            <div classNameName="card-body">
             <h5 classNameName="card-title  addon">Add Ons</h5>
                 <ul className="list-group">
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                         <label className="form-check-label" for="firstCheckbox">Lettuce</label>
                     </li>
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                         <label className="form-check-label" for="secondCheckbox">Fluffy Egg</label>
                     </li>
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                         <label className="form-check-label" for="thirdCheckbox">Sliced Cheese</label>
                     </li>
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                         <label className="form-check-label" for="thirdCheckbox">Glazed Ham</label>
                     </li>
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                         <label className="form-check-label" for="thirdCheckbox">Bacon Strip</label>
                     </li>
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                         <label className="form-check-label" for="thirdCheckbox">Sliced Spam</label>
                     </li>
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                         <label className="form-check-label" for="thirdCheckbox">Beef Bulgogi</label>
                     </li>
                     
                 </ul>
            </div>
    
            </div>
            <div className="col ">
            <div classNameName="card-body">
             <h5 classNameName="card-title  sauce">Sauce</h5>
                 <ul className="list-group">
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                         <label className="form-check-label" for="firstCheckbox">Cheesy White</label>
                     </li>
                     <li className="list-group-item">
                         <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                         <label className="form-check-label" for="secondCheckbox">Spicy Orange</label>
                     </li>
                  </ul>
            </div>
    
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
    )
}

export default Sandwich;
