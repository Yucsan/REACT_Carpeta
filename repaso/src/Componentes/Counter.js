import React, { useState, useEffect } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(2);

    const incrementa = () => { 
        setCount(count + step);
    };

    const cambiaStep = ()=>{
        setStep(step+10);
    }

    useEffect ( () =>{
        setCount(count+2);
    }, [step]);

    return (
        <div>
            <span>{count}</span>
            <button onClick={incrementa}>press</button>
            <button onClick={cambiaStep}>CAMBIA STEP</button>
            <br/>

            <label>VALOR STEP: </label>
            <input 
                type="number" 
                value={step} 
                onChange={(e) => setStep(Number(e.target.value))} 
            />        
        
        </div> 
    );
};

export default Counter
