import React from "react";

function History ({transactions, onRemove}) {
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction, index)=>(
                    <li className="minus">{transaction.text} <span>{transaction.amount}</span><button className="delete-btn" onClick={()=> onRemove(transaction)}>x</button></li>
                ) )}
            </ul>
        </div>
    )
}

export default History;