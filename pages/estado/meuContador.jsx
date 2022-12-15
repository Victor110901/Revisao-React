import { useState } from "react"

export default function meuContador() {
    let [valor, setValor] = useState(0);

    return (
        <div>
            <div>Valor: {valor}</div>
            <button onClick={() => setValor(valor - 1)}>-</button>
            <button onClick={() => setValor(valor + 1)}>+</button>
        </div>
    )
}