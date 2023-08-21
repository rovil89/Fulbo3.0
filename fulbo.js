const criptoYa = "https://criptoya.com/api/dolar";
let dolar = document.getElementById("dolar");

setInterval(() => {
    fetch(criptoYa)
        .then(response => response.json())
        .then(({oficial,blue,solidario})=>{
            dolar.innerHTML=`
            <h2>Cotización Dolar</h2>
            <h3>Dolar Oficial: $${oficial}</h3>
            <h3>Dolar Blue: $${blue}</h3>
            `
        })
        .catch(error=>console.error(error))
},2000)