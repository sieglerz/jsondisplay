const cryptoURL = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,REP,DASH&tsyms=USD,EUR,BIT";

const vm = new Vue({
    el: '#app',

    data: {
        results: []
    },
    mounted() {
        axios.get(cryptoURL).then(response => {
            this.results = response.data
        })
    }
});

//Mock data for the value of BTC in USD - (Can go after results: )
//{"BTC": {"USD":3759.91,"EUR":3166.21}, "ETH": {"USD":281.7,"EUR":236.25}, "NEW Currency": {"USD": 5.60, "EUR": 4.70}