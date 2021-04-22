
import { Card, CardContent, makeStyles, Typography, Box } from '@material-ui/core';
import items from './items';

const useStyle = makeStyles({
    container: {
        display: 'flex'
    },
    trade: {
        flex: 2,
        padding: 5,
        position: 'relative',
        top: 70
    },
    expense: {
        position: 'relative',
        color: 'red',
        left: 170,
        top: -47,
    }
})

const ExpenseCard = ({ items }) => {
    const classes = useStyle();

    const amount = items.map(transaction => transaction.amount);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc+=item), 0) * -1).toFixed(2);
    
    return (
        <div className={classes.container}>
            <div className={classes.trade}>
                <div>
                    <h2>Amount used</h2>
                    <h2 className={classes.expense}>-${expense}</h2>
                </div>
            </div>
        </div>
    )
}

export default ExpenseCard;