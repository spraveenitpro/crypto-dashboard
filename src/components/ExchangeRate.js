const ExchangeRate = ({ exchangedData }) => {
    const rate = parseFloat(exchangedData.exchangeRate).toFixed(2);
    return (
        <div className="exchange-rate">
            <h3> Exchange Rate </h3>
            <h1>{rate}</h1>
            <p>
                {exchangedData.primaryCurrency} to{' '}
                {exchangedData.secondaryCurrency}
            </p>
        </div>
    );
};

export default ExchangeRate;
