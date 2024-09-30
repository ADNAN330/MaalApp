import { useState , useEffect, useRef} from "react";
function SetBudget(){
    
let [inputValue, setInputValue] = useState('');
let [name, setName] = useState('');

let [isName, setIsName] = useState(false);
let [isBudget, setIsBudget] = useState(false);
let[done, setDone] = useState(false);

let [positive, setPositive] = useState(true);





     const handleValueChange = (e) =>{
          setInputValue(e.target.value);
     }
     const handleNameChange = (e) =>{
        setName(e.target.value);
   }
     const keyDownHandle = (e) =>{
        if(
            e.key === 'Backspace' ||
            e.key === 'Delete' ||
            e.key === 'Tab' ||
            e.key === 'Enter' ||
            e.key === 'Escape' ||
            e.key === 'ArrowRight' ||
            e.key === 'ArrowLeft' ||
            e.key === '0' ||
            e.key === '1' ||
            e.key === '2' ||
            e.key === '3' ||
            e.key === '4' ||
            e.key === '5' ||
            e.key === '6' ||
            e.key === '7' ||
            e.key === '8' ||
            e.key === '9' 
        )
        {
          return;
        }
        e.preventDefault();
     }
   
            const errRef = useRef(null);

            const err = errRef.current;

     if(inputValue >999999999){
        setInputValue(999999999);
      err.innerHTML = "Value too high, You cannot be that rich!"
        
     }
     if(inputValue < -9999999){
        setInputValue(-9999999);
        err.innerHTML = "Value too low, You cannot be that poor!"
     }

     



    
   
     

       const nameRef = useRef(null);
       const budgetRef = useRef(null);
       const enterBtnRef = useRef(null);
       const contRef = useRef(null);

       const helpRef = useRef(null);
    

 return(<div id="outer-container">
    <title>MAAL.-Setup your balance</title>

    <div id="m-top-container">
          <div id="img-hold"></div>
            </div>  <p id="l">MAA<span id="point">L.</span> <span id="beta">beta</span></p>

 <div id="container" ref={contRef} className="hover-green">

 <div id="name-input-place"> 
      <input type="text" ref={nameRef} value={name} id="name" placeholder=" Your Username" onChange={handleNameChange} maxLength={24} minLength={3} />
      <button id="enter-name-button" onClick={() => {

       
        if(name.length < 3 || name.trim() === ''){
          const err = errRef.current;

          
         err.innerHTML = "Invalid name, try another one."

        }
        else{ 
              if(isName === false)
              {
                const nameNoRef = nameRef.current;
                  localStorage.setItem("Name Memory", name);
                  localStorage.setItem("Name Exist", isName);
                 nameNoRef.style.backgroundColor = '#91a2ed';
                  setIsName(true);
              }
        }
        
      }}>Enter</button></div>
<p className="text">(Username must be at least 3 characters and less than 20).</p>

     <h1 className="text">Enter your current balance</h1>
 
     <div id="input-place">
      <input type="number" inputMode="numeric" ref={budgetRef} id="budget" placeholder=" Your Balance" value={inputValue} onChange={handleValueChange} onKeyDown={keyDownHandle} max={999999999} min={1}/>
      <button id="enter-button" ref={enterBtnRef} 

     onClick={ () => {if(inputValue > 0 || inputValue < 0 || inputValue ===0)
                     {
                      
                    const budgetNoRef = budgetRef.current;
                        
                            if(!positive){
                                localStorage.setItem("Budget Exist" , true);
                                localStorage.setItem("Budget Memory", -inputValue);
                               budgetNoRef.style.backgroundColor = '#91a2ed';
                                setIsBudget(true);
                            }
                            if(positive){  
                                localStorage.setItem("Budget Memory", inputValue);
                                localStorage.setItem("Budget Exist" , true);
                                budgetNoRef.style.backgroundColor = '#91a2ed';
                                setIsBudget(true);
                            }
                      }
                      
                      else {const err = errRef.current; err.innerHTML = "Invalid Balance Value."; }
                     }}>Enter</button></div>
                     <div id="posNneg-outer-container"><div id="posNneg-container">
                        <button id="pos"
                      onClick={() => { 
                          const enterBtn = enterBtnRef.current;
                          const cont =contRef.current;
                          setPositive(true);
                          
                          enterBtn.style.backgroundColor = '#04d404';
                          cont.classList.remove('hover-red');}}
                          >+</button>
                          <button id="neg"
                           onClick={() =>{
                            const enterBtn = enterBtnRef.current;
                            const cont = contRef.current;
                            setPositive(false);

                            enterBtn.style.backgroundColor = '#9c0808';
                            cont.classList.add('hover-red');}}
                           >-</button>
                           </div></div>
                     <p id="err" ref={errRef}></p>

                     <button id="done-btn" onClick={() =>{if( !isName || !isBudget){err.innerHTML = "Name Or money is missing, try again and make sure to put proper values. "} 
                     else{
                        if(!done)
                        {
                            localStorage.setItem("FirstTime" , done);
                            setDone(true); 
                            window.location.reload();
                        }

                        }}}>Done</button> <br />

                     <a id="help" onClick={() =>{
                      const helpnoRef = helpRef.current; 
                      
                      helpnoRef.style.display = "flex";
                     }}>Need Help?</a>

                   

           </div>
                <div id="help-container" ref={helpRef} >
                     <div id="inner-help-container">
                      <p>MAAL. Is a totally free and safe service to manage your balance ,be more financial and  know more of what you spend/get</p>
                      <button id="ok"onClick={()=>{
                         const helpnoRef = helpRef.current; 
                         helpnoRef.style.display = "none";
                      }}>OK</button>
                     </div>

                     </div>

       </div>);





}
export default SetBudget;