import { useState } from 'react';
import './App.css';
import Balance from './Components/Balance';
import Transactions from './Components/items';
import New from './Components/New';
import { useEffect } from 'react';

function App() {

  const [transactions, setTransactions] = useState([

  ]);

  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }


  return (
    <div className="App">
      <Balance transactions={transactions} />
      <div className='d'>
      </div>
      <div className='products'>
        <New addTransaction={addTransaction}/>
      </div>
      <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
    </div>
  );
}

export default App;
