import axios from 'axios';
import { useFetch } from "./UseFetch";

const api = axios.create({
    baseURL:'https://api.github.com/'
})

const FetchData = () => {

    const {data, isFetching} = useFetch(`${api}users/HenriqueFon/repos`)

    return (
        <ul>
            {isFetching && <p>Carregando... </p>}
            {data.map(repos => 
                <li key = {repos.id}>{repos.name}</li>
            )}
        </ul>
    )
}

export default FetchData;