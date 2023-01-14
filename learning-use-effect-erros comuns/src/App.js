import './App.css';
import { useEffect, useState } from 'react';
/* 
    1- Geralmente no ciclo de montagem do componente  o useEffect é 
  rodado depois dos componentes estaticos. No exemp´lo do document.title
  é possível ver que o h3 dentro do retorno é atualizado primeiro antes do document.title
  que está dentro do useEffect.

    2- O array de dependencias do useEffect serve para monitorar as alterações que acontecem
  na variável observada e executar o useEffect. Nesse caso somente quando houver modificações
  na variável count ou nas demais passadas dentro do array que o useEffect será executado. Caso
  vázio será executado apenas uma vez.

*/
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.count("useEffect: passei por aqui")
    document.title = `Você já clicou ${count} vezes`
  }, [count])

  console.log("componente renderizou");

  return (
    <div className="App">
      <h3>Você já clicou {count} vezes</h3>
      <button onClick = {() => setCount((c) => c + 1)}>
        Contar clique
      </button>
    </div>
  );
}

export default App;
