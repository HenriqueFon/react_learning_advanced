import MyForm from "./components/MyForm";
import useReduce from "./components/UseReduce";
function App() {
  return (
    <div>
      <MyForm user = {{name:"Josias",email:"josias@gmail.com"}}/>
      <UseReduce />
    </div>
  );
}

export default App;
