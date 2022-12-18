import { useState, useEffect } from "react";

const TrainningEfect = () => {

    const [number, setNumber] = useState(0);

    //1-useEffect, sem dependências
    //Executado toda vez que o componente for renderizado no app
    useEffect(() => {
        console.log("Primeiro use Effect")
    })

    //2 - useEffect, com dependências
    //Executado toda vez que a depêndencia for renderizada
    //No caso vázio, ele irá executar apenas uma vez
    useEffect(() => {
        console.log("Segundo use Effect")
    },[])

    //3 - item no array de deps.
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        if(anotherNumber != 0)
        console.log("Sou executado apenas quando alguma coisa relacionada a another acontece");
    },[anotherNumber])


    const changeSomething = () => {
        setNumber(number + 1)
    }

    const changeAnotherNumber = () => {
        setAnotherNumber(anotherNumber + 1)
    }
 
    return (
        <div>
            <h2>Use Effect</h2>
            <p>Number: {number} </p>
            <button onClick = {changeSomething}>Executar!</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick = {changeAnotherNumber}>Segundo Executar!</button>
        </div>
    );
}

export default TrainningEfect;