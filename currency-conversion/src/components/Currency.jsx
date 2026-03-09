import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowCircleRight } from "react-icons/fa";
import 'axios'
import axios from 'axios';

const BASE_URL = "https://api.currencyapi.com/v3/latest"
const token = import.meta.env.VITE_CURRENCY_API_KEY

function Currency() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);


    const excange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${token}&base_currency=${fromCurrency}`)
        setResult((response.data.data[toCurrency].value * amount).toFixed(3))

    }

    return (

        <div className='currency-div' >
            <div className='title'>
                <h1 className='title'>Currency Converter</h1>
            </div>
            <div className='currency-data'>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount' />

                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className='select-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <FaArrowCircleRight style={{ fontSize: '40px', marginRight: '10px' }} />

                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className='select-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' readOnly />
            </div>

            <button onClick={excange} className='button'>Convert</button>
        </div>


    )
}

export default Currency