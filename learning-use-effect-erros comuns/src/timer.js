import { useEffect,useState } from "react";
/*Nesse caso foi preciso retornar uma função de unmount dentro do
Use effect para que ele fizesse a correção do intervalo */
export const timer = () => {
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        const intervalId = ssetInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000)

        return () => {
            console.log("umont")
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            <h2>{seconds} Segundos</h2>
        </div>
    )
}