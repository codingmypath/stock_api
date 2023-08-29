const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

const stocks = {
    'AAPL': {
        'name': 'Apple',
        'dividend': 0.96,
        'pay': 'quarterly',
    },
    'AVGO': {
        'name': 'Broadcom',
        'dividend': 18.40,
        'pay': 'quarterly',
    },
    'CSCO': {
        'name': 'Cisco Systems',
        'dividend': 1.56,
        'pay': 'quarterly',
    },
    'KHC': {
        'name': 'The Kraft Heinz Compay',
        'dividend': 1.60,
        'pay': 'quarterly',
    },
    'SBUX': {
        'name': 'Starbucks Corporation',
        'dividend': 2.12,
        'pay': 'quarterly',
    },
}

app.get('/api/:stockName', (req, res) => {
    const ticker = req.params.stockName.toUpperCase();
    if (stocks[ticker]) {
        res.json(stocks[ticker])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on PORT ${PORT}`)
})