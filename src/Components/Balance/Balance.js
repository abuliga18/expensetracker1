import React from "react";

function Balance ({totalBalance}) {
   return (
    <div>
        <h4>Your Balance</h4>
        <h1>
            {totalBalance() >= 0 ? `$${totalBalance()}` : `-$${Math.abs(totalBalance())}` }
        </h1>
    </div>
   )
}

export default Balance;

