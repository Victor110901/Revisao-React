export default function Repeticao1() {
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura',
    ]

    function renderizarLista() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}

// METODO 1

// function renderizarLista() {
//     const itens = []

//     for (let i = 0; i < listaAprovados.length; i++) {
//         itens.push(<li key={i}>{listaAprovados}</li>)
//     }
//     return itens
// }