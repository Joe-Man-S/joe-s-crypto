async function loadPrices(){

const response = await fetch(
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
)

const data = await response.json()

document.getElementById("btc").innerText = "$" + data.bitcoin.usd
document.getElementById("eth").innerText = "$" + data.ethereum.usd

}

loadPrices()