import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function desafioMegaSena() {
    const [quantidade, setQuantidade] = useState(6)
    const [numeros, setNumeros] = useState([])

    function gerarNumeros(min = 0, max = 60) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function mega() {
        const array = []
    
        for(let i = 0; i < quantidade; i++) {
              array.push(
                  <ContadorDisplay key={i} numero={gerarNumeros()}/>
              )  
        }

        return setNumeros(array)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Mega Sena</h1>
            <span style={{
                display: "flex",
                flexDirection: "initial"
            }}>
                {numeros}
            </span>
            <input type="number" onChange={(e) => setQuantidade(e.target.value)}/>
            <button onClick={() => console.log(mega())}>Gerar</button>
        </div>
    )
}