async function convertCurrency() {

    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    if (!amount) {
        alert("Enter amount!");
        return;
    }

    try {
        let response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/${from}`
        );

        let data = await response.json();

        let rate = data.rates[to];
        let result = amount * rate;

        document.getElementById("result").innerText =
            `${amount} ${from} = ${result.toFixed(2)} ${to}`;

    } catch (error) {
        document.getElementById("result").innerText =
            "Error fetching exchange rates!";
    }
}