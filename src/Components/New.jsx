import { useState } from 'react';
import { Typography, Box, TextField, Button } from '@material-ui/core';
import '../App.css'


const NewTransaction  = ({ addTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const poor = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: -5,
        }

        addTransaction(transaction);
    }
    
    const iphone = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: -799,
        }

        addTransaction(transaction);
    }

    const gold = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: -60000,
        }

        addTransaction(transaction);
    }

    const Tesla = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: -78490,
        }

        addTransaction(transaction);
    }

    const house = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: -500000,
        }

        addTransaction(transaction);
    }

    const ferrari = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: -1416362
        }

        addTransaction(transaction);
    }

    const ast = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: -22550000
        }

        addTransaction(transaction);
    }

    const poor2 = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: -50000000
        }

        addTransaction(transaction)
    }

    const houseex = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: -1000000000
        }

        addTransaction(transaction)
    }
    
    return (
        <>
            <div className="products">
                <div className="product">
                    <img value={text} label="Text" onChange = {(e) => setText(e.target.value)} src="https://img.freepik.com/free-vector/boy-give-money-beggar_43633-2312.jpg?size=626&ext=jpg"></img>
                    <h2 className='h2'>Give it to a poor man</h2>
                    <h4 value={amount} onChange = {(e) => setAmount(e.target.value)}>$5</h4>
                    <button onClick={poor}>Give</button>
                </div>
            </div>
            <div className="products2">
                <div className="product2">
                    <img value={text} label="Text" onChange = {(e) => setText(e.target.value)} src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12/Blue/Apple-iPhone-12-Blue-frontimage.png"></img>
                    <h2 className='h2'>Buy Iphone 12</h2>
                    <h4 value={amount} label="Enter Amount" onChange = {(e) => setAmount(e.target.value)}>799</h4>
                    <button onClick={iphone}>Buy</button>
                </div>
            </div>
            <div className="products3">
                <div className="product3">
                    <img value={text} label="Text" onChange = {(e) => setText(e.target.value)} src="data:image/jpeg;base64,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"></img>
                    <h2 className='h2'>Gold Toilet Paper</h2>
                    <h4 value={amount} onChange = {(e) => setAmount(e.target.value)}>$60,000</h4>
                    <button onClick={gold}>Buy</button>
                </div>
            </div>
            <div className="products4">
                <div className="product4">
                    <img value={text} label="Text" onChange = {(e) => setText(e.target.value)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zskDuakkl51ZfdF1IJK3gi_bA8kZGx7ZEA&usqp=CAU"></img>
                    <h2 className='h2'>Tesla Model S</h2>
                    <h4 value={amount} onChange = {(e) => setAmount(e.target.value)}>$78,490</h4>
                    <button onClick={Tesla}>Buy</button>
                </div>
            </div>
            <div className="products5">
                <div className="product5">
                    <img value={text} label="Text" onChange = {(e) => setText(e.target.value)} src="https://i.insider.com/5176cf91ecad04d377000010?width=1100&format=jpeg&auto=webp"></img>
                    <h2 className='h2'>House</h2>
                    <h4 value={amount} onChange = {(e) => setAmount(e.target.value)}>$500,000</h4>
                    <button onClick={house}>Buy</button>
                </div>
            </div>
            <div className="products6">
                <div className="product6">
                    <img value={text} label="Text" onChange = {(e) => setText(e.target.value)} src="data:image/jpeg;base64,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"></img>
                    <h2 className='h2'>La Ferrari</h2>
                    <h4 value={amount} onChange = {(e) => setAmount(e.target.value)}>$1,416,362</h4>
                    <button onClick={ferrari}>Buy</button>
                </div>
            </div>
            <div className="products5">
                <div className="product5">
                    <img value={text} label="Text" onChange = {(e) => setText(e.target.value)} src="https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2020/08/The-Aston-Martin-DBR1-.jpg?q=50&fit=crop&w=740&h=350&dpr=1.5"></img>
                    <h2 className='h2'>Aston Martin DBR1</h2>
                    <h4 value={amount} onChange = {(e) => setAmount(e.target.value)}>$22,550,000</h4>
                    <button onClick={ast}>Buy</button>
                </div>
            </div>
            <div className="products5">
                <div className="product5">
                    <img value={text} label="Text" onChange = {(e) => setText(e.target.value)} src="https://img.freepik.com/free-vector/boy-give-money-beggar_43633-2312.jpg?size=626&ext=jpg"></img>
                    <h2 className='h2'>Give it to a poor man</h2>
                    <h4 value={amount} onChange = {(e) => setAmount(e.target.value)}>$50000000</h4>
                    <button onClick={poor2}>Buy</button>
                </div>
            </div>
            <div className="products5">
                <div className="product5">
                    <img value={text} label="Text" onChange = {(e) => setText(e.target.value)} src="https://i.pinimg.com/originals/6e/41/c5/6e41c5300b4643d739000786d59c930c.jpg"></img>
                    <h2 className='h2'>World Most Expensive House</h2>
                    <h4 value={amount} onChange = {(e) => setAmount(e.target.value)}>$1000000000</h4>
                    <button onClick={houseex}>Buy</button>
                </div>
            </div>
        </>
    )
}

export default NewTransaction;