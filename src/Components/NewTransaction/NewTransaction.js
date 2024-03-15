import React, {useState} from "react";

function NewTransaction ({onAddTransaction}) {

    const [text, setText] = useState();
    const [amount, setAmount] = useState();

    const generateUniqueId = () => {
        return Math.random()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const transactionId = generateUniqueId();
        const transaction ={id: transactionId, text: text, amount: parseFloat(amount)};
        onAddTransaction(transaction);
        setText('');
        setAmount('')
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label for='text'>Text</label>
                    <input type="text" id="text" placeholder="Enter text..." value={text}
                     onChange={(e)=> setText(e.target.value)} required/>
                </div>
                <div className="form-control">
                    <label for='amount'>Amount <br/>(negative - expense, positive - income)</label>
                    <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e)=> setAmount(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default NewTransaction;