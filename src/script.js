// USD = yen * (1 / 105.8401528708)
// YEN =  usd * 105.8401528708

/*
const toYen = (amount , rate) => {
    return amount * rate;
}

const toUsd = (amount, rate) => {
    return amount * (1 / rate);
}
*/

class CurrencyConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 105.840152870,
            usd: 1,
            yen: 1 * 105.840152870,
        };

        this.handleUsdChange = this.handleUsdChange.bind(this);
        this.handleYenChange = this.handleYenChange.bind(this);
    }

    toUsd(amount, rate) {
        return amount * (1 / rate);
    }

    toYen(amount, rate) {
        return amount * rate;
    }

    convert(amount, rate, equation) {
        const input = parseFloat(amount);
        if(Number.isNaN(input)) {
            return '';
        }
        return equation(input, rate).toFixed(3);
    }

    handleUsdChange(event) {
        /* ---- Moved to convert function -----
        const input = parseFloat(event.target.value);
        if(Number.isNaN(input)) {
            this.setState({
                usd: '',
                yen: '',
            });

            return; // early return
        }
        */
        const yen = this.convert(event.target.value, this.state.rate, this.toYen);
        this.setState({
            usd: event.target.value,
            yen
        });
    }

    handleYenChange(event) {
        /* ----- Moved to convert function ------
        const input = parseFloat(event.target.value);
        if(Number.isNaN(input)) {
            this.setState({
                usd: '',
                yen: '',
            });

            return; // early return
        }
        */

        const usd = this.convert(event.target.value, this.state.rate, this.toUsd);
        this.setState({
            yen: event.target.value,
            usd
        });
    }

    render() {
        const { rate, usd, yen } = this.state;

        return (
            <div className="container">
                <div className="text-center p-3 mb-2">
                    <h2 className="mb-2">Currency Converter</h2>
                    <h4>USD 1 : {rate} YEN</h4>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                        <span className="mr-2">USD</span>
                        <input value={usd} onChange={this.handleUsdChange} type="number" />
                        <span className="mx-3">=</span>
                        <input value={yen} onChange={this.handleYenChange} type="number" />
                        <span className="ml-1">YEN</span>
                    </div>
                </div>
            </div>
        )
    }

}

ReactDOM.render(
    <CurrencyConverter />,
    document.getElementById('root')
);
