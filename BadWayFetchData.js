import {useState, useEffect} from "react";

const BadWayFetchData = () => {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        
        fetch('https://api.github.com/users/HenriqueFon/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])
    

    return (
        <ul>
            {repositories.map(repos => 
                <li key = {repos.id}>{repos.name}</li>
            )}
        </ul>
    )
}

export default BadWayFetchData;