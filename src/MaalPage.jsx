import { useState, useRef, useEffect } from "react";
import BalaneChange from "./balanceChange";

function MaalPage(){


    const username = localStorage.getItem("Name Memory");
    let [userBalance, setUserBalance] = useState(localStorage.getItem("Budget Memory"));
    let [balanceTable, setBalanceTable] = useState([]);
    localStorage.setItem("Local Balance", userBalance);
    
 
    
    

    let [desc, setDesc] = useState('');
    let [amot, setAmot] = useState();

    let [isPositive, setIsPositive] = useState(true);




    const shownBalanceRef = useRef(null);

    

    useEffect(() =>{
        
     

        const shownBalance = shownBalanceRef.current;

        if(localStorage.getItem("Local Balance") >= 0){
            shownBalance.style.color = "green";
        }else{
            shownBalance.style.color = "red";
        }
    },);

    const hiddenContainerRef = useRef(null);
    function ShowHidden(){
        const hiddenContainer = hiddenContainerRef.current; 
        hiddenContainer.style.display = "flex";
    }
    function HideShown(){
        const hiddenContainer = hiddenContainerRef.current; 
       hiddenContainer.style.display = "none";
    }

  

    
    
     const posbtnRef = useRef(null);
     const negbtnRef = useRef(null);


    let isDesc =  false;
    let isAmount = false;

    const errRef = useRef(null);
    const tableRef = useRef(null);
    
    function saveInput(){

        const hiddenContainer = hiddenContainerRef.current; 
        const err = errRef.current;
        if(desc.trim() === ''){
            err.style.color = "red";
           err.innerHTML = "Invalid Description";
            isDesc =  false;
        }else{
            localStorage.setItem("desc",desc);
            isDesc =  true;
        
        }
        if(amot === 0 || amot>0 || amot<0){
            
        if(isPositive){
            localStorage.setItem("Amount", amot);
            isAmount = true;
        }else if(!isPositive){
            localStorage.setItem("Amount", -amot);
            isAmount = true;
        }

        }else{
           err.style.color = "red";
           err.innerHTML = "Invalid Amount";
            isAmount = false;
        }

        if(isDesc && isAmount){
            setBalanceTable([...balanceTable, <BalaneChange key={balanceTable.length}/>]);
            hiddenContainer.style.display = "none";
            if(isPositive == true){ setUserBalance(UB => Number(UB) + Number(amot));}
            else if(isPositive == false){ setUserBalance(UB => Number(UB) + Number(-amot));}
            localStorage.setItem("Local Balance", userBalance);

            setDesc('');
            setAmot('');
            
          
        }else{
           err.style.color = "red";
           err.innerHTML = "Invalid Amount or Description";
        }
    }
 
   

    const descChangeHandle =(e) =>{
      setDesc(e.target.value);
    }
    const amountChangeHandle =(e) =>{
        setAmot(e.target.value);
        
        if(amot === Number('--'))
        {
          alert('no');
        }
    }


      if(amot >99999){
        setAmot(99999);
    }
    if(amot< -99999)
    {
        setAmot(-99999);
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






     

  const helpRef = useRef(null)


    return(<div id="m-outer-container">
        <title>MAAL.- Main page</title>
       

        <div >
          <div id="img-hold"></div>
            <p id="l">MAA<span id="point">L.</span> <span id="beta">beta</span></p>
            
            </div><br />
        <div id="m-page-outer-container">
        <div id="m-page-container">
           
        
            <div id="m-main-bottom">
                
                <h3>{username}'s Balance:<span id="m-shown-balance" ref={shownBalanceRef}>{localStorage.getItem("Local Balance")}</span></h3>
               
                <button id="m-add-btn" onClick={ShowHidden}>Add</button>
              
            </div>
            <div id="m-input">
            <div id="m-change-container" key={0}> <p id="first">Description</p> <p id="mid">Amount</p> <p id="end">Date</p></div>
            <div  id="m-values-table" >{balanceTable}</div>
                
          
            </div>
          
            </div><br />
          
            </div>

            <div id="m-hidden-container" ref={hiddenContainerRef}><div id="m-inner-hidden-container">
                <p>Update Balance</p>
                <p>Add A brief Description:</p>
                <input value={desc} id="dis-input" type="text" placeholder=" Description" maxLength={20} onChange={descChangeHandle} />
                <br /> 
                <p>Add The Amount:</p>
                <input value={amot} type="number" inputMode="numeric" name="Amount" id="amount-input" placeholder=" 00000" onChange={amountChangeHandle} onKeyDown={keyDownHandle} step={0.001}/>
                <br />
                <button id="m-pos" ref={posbtnRef} onClick={() =>{
                    const posbtn = posbtnRef.current;
                    const negbtn = negbtnRef.current;
                     posbtn.style.backgroundColor = "green";
        posbtn.style.color = "white";
        posbtn.style.borderColor = "white";
        
        negbtn.style.backgroundColor = "white";
        negbtn.style.color = "red";
        negbtn.style.borderColor = "red";
        setIsPositive(true);
    }}>+</button> <button id="m-neg" ref={negbtnRef} onClick={() => {  
        const posbtn = posbtnRef.current;
        const negbtn = negbtnRef.current;
            posbtn.style.backgroundColor = "white";
            posbtn.style.color = "green";
            posbtn.style.borderColor = "green";
            
            negbtn.style.backgroundColor = "red";
            negbtn.style.color = "white";
            negbtn.style.borderColor = "white";
            setIsPositive(false);}}>-</button><br />
                <p id="m-err" ref={errRef}></p><br />

                <button className="i-h-c-btn" onClick={HideShown}>Cancel</button><button className="i-h-c-btn" onClick={saveInput}>Enter</button>
             
                </div>
               </div>
               <div id="chooses">
                <p id="m-h" onClick={() =>{
                const helpnoRef = helpRef.current; 
                helpnoRef.style.display = "flex";
               }}>Help</p>
                <p id="m-r" onClick={() =>{ localStorage.clear();
                 window.location.reload();
               }}>Reset</p>
                <p id="m-g" onClick={() =>{window.location.href = 'https://github.com/ADNAN330'} }>GitHub</p></div>
               
         <div id="help-container" ref={helpRef} >
                     <div id="inner-help-container">
                      <p>MAAL. Is a totally free and safe service
                         to manage your balance ,be more financial and  know more of what you spend/get</p>
 
                      <button id="ok"onClick={()=>{
                         const helpnoRef = helpRef.current; 
                         helpnoRef.style.display = "none";
                      }}>OK</button>
                     </div>
                     </div>


    </div>);
}



export default MaalPage;










/*  function posClick(){
        posbtn.style.backgroundColor = "green";
        posbtn.style.color = "white";
        posbtn.style.borderColor = "white";
        
        negbtn.style.backgroundColor = "white";
        negbtn.style.color = "red";
        negbtn.style.borderColor = "red";
        setIsPositive(true);
    }
    function negClick(){
        posbtn.style.backgroundColor = "white";
        posbtn.style.color = "green";
        posbtn.style.borderColor = "green";
        
        negbtn.style.backgroundColor = "red";
        negbtn.style.color = "white";
        negbtn.style.borderColor = "white";
        setIsPositive(false);








        
     let shownBalance = document.getElementById('m-shown-balance');
     let balanceStyle = shownBalance.style;

     if(localStorage.getItem("Local Balance") > 0){
        balanceStyle.color = "green";
     }
     else if(localStorage.getItem("Local Balance") < 0){
        balanceStyle.color = "red";
     }



    }*/