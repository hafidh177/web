
import { Typography, makeStyles, Box } from '@material-ui/core';
import { useEffect, useState } from 'react';

const useStyle = makeStyles({
    balance: {
        fontSize: 45,
        top: '0px',
        right: '450px',
        bottom: '100px',
    }
})

const Balance = ({ transactions }) => {
    const [balance, setBalance] = useState(0);
    const classes = useStyle();
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount += item), 1000000000).toFixed(0);
    
    return (
        <div>
            <h1 className={classes.balance}>Balance: ${total}</h1>
        </div>
    )
}

export default Balance;