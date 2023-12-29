import {useState} from 'react';

export default function UserInput({userData,handleEvent}){

    return(
        <section id="user-input">
        <div className="input-group">
        <p>
        <label>Initial Investment</label>
        <input type="number"
            required 
            value={userData.initialInvestment} 
            onChange={(event)=>handleEvent("initialInvestment",event.target.value)}/>
        </p>
        <p>
        <label>Annual Investment</label>
        <input type="number" 
            required
            value={userData.annualInvestment} 
            onChange={(event)=>handleEvent("annualInvestment",event.target.value)}
        />
        </p>
        </div>
        <div className="input-group">
        <p>
        <label>Expected Return</label>
        <input type="number" 
             required
            value={userData.expectedReturn} 
            onChange={(event)=>handleEvent("expectedReturn",event.target.value)}
        />
        </p>
        <p>
        <label>Duration</label>
        <input type="number" 
             required
            value={userData.duration} 
            onChange={(event)=>handleEvent("duration",event.target.value)}
        />
        </p>
        </div>
        </section>
    );
}