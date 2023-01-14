import { useEffect, useState } from "react";
/*Valores primitivos são números, string, booleanos e null */
/*No caso de uma dependência com um objeto, a cada alteração desse objeto o useEffect será
renderizado*/
/*Nesse caso é melhor usar variáveis primitivas no array ce dependencias do useEffect
para que o monitoramento seja exclusivo dos valores que vc deseja */
export const teste2 = () => {
    const [user, setUser] = useState({
        name: "",
        active: false,
    })

    useEffect(() => {
        console.count("useEffect: passei por aqui");
    },[user.name, user.active])

    return(
        <div>
            <input
                type = "text"
                onChange = {(e) => setUser((user) => ({...user, name: e.target.value}))}/>
        </div>
    )
}