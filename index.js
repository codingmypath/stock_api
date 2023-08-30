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
        'sector': 'Technology',
    },
    'AVGO': {
        'name': 'Broadcom',
        'dividend': 18.40,
        'pay': 'quarterly',
        'sector': 'Technology',
    },
    'BA': {
        'name': 'Boeing Company',
        'dividend': 8.22,
        'pay': 'quarterly',
        'sector': 'Industrials'
    },
    'C': {
        'name': 'Citigroup, Inc.',
        'dividend': 2.12,
        'pay': 'quarterly',
        'sector': 'Financial'
    },
    'CAT': {
        'name': 'Caterpillar, Inc.',
        'dividend': 5.20,
        'pay': 'quarterly',
        'sector': 'Industrials',
    },
    'CSCO': {
        'name': 'Cisco Systems',
        'dividend': 1.56,
        'pay': 'quarterly',
        'sector': 'Technology',
    },
    'D': {
        'name': 'Dominion Energy, Inc',
        'dividend': 2.67,
        'pay': 'quarterly',
        'sector': 'Utilities',
    },
    'F': {
        'name': 'Ford Motor Company',
        'dividend': 0.60,
        'pay': 'quarterly',
        'sector': 'Consumer Cyclical',
    },
    'JNJ': {
        'name': 'Johnson & Johnson',
        'dividend': 4.76,
        'pay': 'quarterly',
        'sector': 'Healthcare',
    },
    'KHC': {
        'name': 'The Kraft Heinz Compay',
        'dividend': 1.60,
        'pay': 'quarterly',
        'sector': 'Consumer Defensive',
    },
    'O': {
        'name': 'Realty Income Corporation',
        'dividend': 3.066,
        'pay': 'Monthly',
        'sector': 'Real Estate',

    },
    'PEP': {
        'name': 'PepsiCo',
        'dividend': 5.06,
        'pay': 'quarterly',
        'sector': 'Consumer Defensive',
    },
    'SBUX': {
        'name': 'Starbucks Corporation',
        'dividend': 2.12,
        'pay': 'quarterly',
        'sector': 'Consumer Cyclical',
    },
    'SPG': {
        'name': 'Simon Property Group',
        'dividend': 7.40,
        'pay': 'quarterly',
        'sector': 'Real Estate',
    },
    'TGT': {
        'name': 'Target Corporation',
        'dividend': 4.40,
        'pay': 'quarterly',
        'sector': 'Consumer Defensive',
    },
    'WMT': {
        'name': 'Walmart Inc.',
        'dividend': 2.28,
        'pay': 'quarterly',
        'sector': 'Consumer Defensive',
    }
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