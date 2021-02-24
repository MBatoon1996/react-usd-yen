var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var CurrencyConverter = function (_React$Component) {
    _inherits(CurrencyConverter, _React$Component);

    function CurrencyConverter(props) {
        _classCallCheck(this, CurrencyConverter);

        var _this = _possibleConstructorReturn(this, (CurrencyConverter.__proto__ || Object.getPrototypeOf(CurrencyConverter)).call(this, props));

        _this.state = {
            rate: 105.840152870,
            usd: 1,
            yen: 1 * 105.840152870
        };

        _this.handleUsdChange = _this.handleUsdChange.bind(_this);
        _this.handleYenChange = _this.handleYenChange.bind(_this);
        return _this;
    }

    _createClass(CurrencyConverter, [{
        key: "toUsd",
        value: function toUsd(amount, rate) {
            return amount * (1 / rate);
        }
    }, {
        key: "toYen",
        value: function toYen(amount, rate) {
            return amount * rate;
        }
    }, {
        key: "convert",
        value: function convert(amount, rate, equation) {
            var input = parseFloat(amount);
            if (Number.isNaN(input)) {
                return '';
            }
            return equation(input, rate).toFixed(3);
        }
    }, {
        key: "handleUsdChange",
        value: function handleUsdChange(event) {
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
            var yen = this.convert(event.target.value, this.state.rate, this.toYen);
            this.setState({
                usd: event.target.value,
                yen: yen
            });
        }
    }, {
        key: "handleYenChange",
        value: function handleYenChange(event) {
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

            var usd = this.convert(event.target.value, this.state.rate, this.toUsd);
            this.setState({
                yen: event.target.value,
                usd: usd
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                rate = _state.rate,
                usd = _state.usd,
                yen = _state.yen;


            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "text-center p-3 mb-2" },
                    React.createElement(
                        "h2",
                        { className: "mb-2" },
                        "Currency Converter"
                    ),
                    React.createElement(
                        "h4",
                        null,
                        "USD 1 : ",
                        rate,
                        " YEN"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row text-center" },
                    React.createElement(
                        "div",
                        { className: "col-12" },
                        React.createElement(
                            "span",
                            { className: "mr-2" },
                            "USD"
                        ),
                        React.createElement("input", { value: usd, onChange: this.handleUsdChange, type: "number" }),
                        React.createElement(
                            "span",
                            { className: "mx-3" },
                            "="
                        ),
                        React.createElement("input", { value: yen, onChange: this.handleYenChange, type: "number" }),
                        React.createElement(
                            "span",
                            { className: "ml-1" },
                            "YEN"
                        )
                    )
                )
            );
        }
    }]);

    return CurrencyConverter;
}(React.Component);

ReactDOM.render(React.createElement(CurrencyConverter, null), document.getElementById('root'));