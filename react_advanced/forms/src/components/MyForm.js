import styles from './MyForm.module.css';
import { useState } from 'react';
const MyForm = ({user}) => {



    const [name,setName] = useState(user ? user.name : '');
    const [email,setEmail] = useState(user ? user.email : '');
    const [date,setDate] = useState();


    //Caminho para achar esse campo é sempre o evento.target e clicar nas (...) de value
    //pra mostar esse valor
    const handleName = (event) => {
        //Passa o setName, como o valor do evento
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, date);

        //limpar o form
        setName("");
        setEmail("");
        setDate("");
    }

    return (
        <form className= {styles.form} onSubmit = {handleSubmit} value = "Enviar">
            <div className={styles.textarea}>
                <label htmlFor="name">Nome:</label>
                <input type = "text" name = "name" value = {name} placeholder="Digite o seu nome" onChange={handleName} />
            </div>
            <label className={styles.textarea}>
                <span>E-mail</span>
                <input type = "email" name = "email" value = {email} placeholder='Digite o seu e-mail' onChange={handleEmail} />
            </label>
            <label className={styles.textarea}>
                <span>Data de nascimento</span>
                <input type = "nascimento" name = "nascimento" placeholder='Digite a sua data de nascimento' onChange={(e) => setDate(e.target.value)} />
            </label>
            <input type = "submit" className = {styles.input} value = "Enviar" />
        </form>
    )
}

export default MyForm;