import React, {useState} from 'react';
import './App.css';
import Balance from '../Balance/Balance';
import IncomeExpense from '../IncomeExpense/IncomeExpense';
import History from '../History/History'
import NewTransaction from '../NewTransaction/NewTransaction';

function App() {

  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions)=> [...prevTransactions, transaction])
  }

  const removeTransaction = (transaction) => {
    const filteredTransactions = transactions.filter(t => t.id !== transaction.id);
    setTransactions(filteredTransactions);
  }

  const transactionsAmount = transactions.map(t => t.amount);

  const income = () => {
      const positiveAmount = transactionsAmount.filter(t => t >0);
      if (positiveAmount.length <1) {
          return 0;
      }
      const summedPositiveAmount = positiveAmount.reduce((accumulator, currentValue)=> {
          return accumulator + currentValue;
      })
      return summedPositiveAmount;
  }

  const expense = () => {
      const negativeAmount = transactionsAmount.filter(t=> t < 0);

      if (negativeAmount.length < 1) {
          return 0;
      }
      const summedNegativeAmount = negativeAmount.reduce((accumulator, currentValue)=> {
          return accumulator + currentValue;
      });
      return Math.abs(summedNegativeAmount);
  }

  const totalBalance = () => {
    if (transactionsAmount.length <1) {
      return 0;
    }
    const total = transactionsAmount.reduce((accumulator, currentValue)=> {
      return accumulator + currentValue;
  })

  return total;
}

  return (
    <div>
      <h2 className='h2'>Expense Tracker</h2>
      <div className='container'>
        <Balance totalBalance={totalBalance} />
        <IncomeExpense income={income} expense={expense}/>  
        <History transactions={transactions} onRemove={removeTransaction} />
        <NewTransaction onAddTransaction ={addTransaction}/>
      </div>   
    </div>
  );
}

export default App;

