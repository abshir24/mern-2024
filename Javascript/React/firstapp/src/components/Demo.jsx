function Demo(props){
    const cryptos = [
        {
          id: 1,
          name: 'Bitcoin',
          symbol: 'BTC',
          quotes: { EUR: { price: 7179.92084586 } },
        },
        {
          id: 2,
          name: 'Ethereum',
          symbol: 'ETH',
          quotes: { EUR: { price: 595.218568203 } },
        },
        {
          id: 3,
          name: 'Litecoin',
          symbol: 'LTC',
          quotes: { EUR: { price: 117.690716234 } },
        },
    ];

    if(cryptos.length > 0){
        return <ul>
            {
                cryptos.map((coin) => {
                    return <li key = {coin.id}>
                        <h1 style={{color: 'lightgreen'}}>
                            Currency: {coin.name} {coin.symbol}
                        </h1>

                        <p style={{color: 'lightgreen'}}> Price: {coin.quotes.EUR.price}</p>
                    </li>
                })
            }
        </ul>
    }
    
    return <h1>There are no Cryptocurrencies in this list!</h1>
}

export default Demo