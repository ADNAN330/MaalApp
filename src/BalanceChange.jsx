import { useEffect, useRef } from "react";

function BalaneChange(){

    const moneyNameRef = useRef(null);
    const moneyAmountRef = useRef(null);
    const moneyDateRef = useRef(null);

    useEffect(()=>{
        const moneyName = moneyNameRef.current;
        const moneyAmount = moneyAmountRef.current;
        const moneyDate = moneyDateRef.current;

        if(localStorage.getItem("Amount") >= 0){
            moneyName.style.color = "#03c900";
            moneyAmount.style.color = "#03c900";
            moneyDate.style.color = "#03c900";
        }else if(localStorage.getItem("Amount") < 0) {
            moneyName.style.color = "red";
            moneyAmount.style.color = "red";
            moneyDate.style.color = "red";
        }
    })

    return(<div id="balance-info">

        <p id="money-name" ref={moneyNameRef}>{localStorage.getItem("desc")}</p>
        <div id="money-amount" ><p ref={moneyAmountRef}>{localStorage.getItem("Amount")}</p></div>
       <p id="money-date" ref={moneyDateRef}>{Intl.DateTimeFormat('en-GB').format(new Date())}</p>
    </div>);
}

export default BalaneChange;