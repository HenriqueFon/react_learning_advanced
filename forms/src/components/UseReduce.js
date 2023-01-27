import { useReducer } from "react"

const UseReduce = () => {
    //1 - começando com o useReducer
    //irá armazenar dentro de number, um número aleatório
    //dispatch é usado para chamar o hook para ser invocado
    const [number, dispatch] = useReducer((state,action) => {
        return Math.random(state);
    })


    return (
        <div>
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick = {dispatch}>Alterar número</button>
        </div>
    )
}

export default UseReduce;