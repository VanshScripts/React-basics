// Making a custom Hook

import { useEffect , useState } from "react";

function useCurrencyInfo(currency){
    const [data , setData] = useState({})
 useEffect(()=> {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2024-02-26/currencies/eur.json`)
    .then((res) => console.log(res.json()))
    .then((res) => setData(res[currency]))
    console.log(data);

 } , [currency])   
 console.log(data);
 return data
}
export default useCurrencyInfo;