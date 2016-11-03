let exchangeRates = {
  eur: 1,
  lvl: 0.69,
  usd: 1.11
}

let eurToLvl = eur => 
  eur * exchangeRates.lvl

let usdExchangeRate = exchangeRates.lvl

let usdToLvl = usd => {
  // 1. usd => eur
  let eur = usd / exchangeRates.usd
  // 2. eur => lvl
  let lvl = eur * exchangeRates.lvl
  return lvl
}


let usdToLvl2 = function(usd) {
  // return usd / exchangeRates.usd * exchangeRates.lvl
  // 1. usd => eur
  let eur = usd / exchangeRates.usd
  // 2. eur => lvl
  let lvl = eur * exchangeRates.lvl
  return lvl
}

let usdToLvl3 = usd =>
  usd / exchangeRates.usd * exchangeRates.lvl

let lvl = usdToLvl(10)
