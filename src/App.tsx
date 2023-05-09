import { PlusCircle } from "@phosphor-icons/react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Tasks } from "./components/tasks/Tasks";

function App() {
  return (
    <>
      <div>
        <Header />
        <form action="" className="form">
          <div className="sectionForm">
            <textarea name="" placeholder="Adicione uma nova tarefa" />
            <button type="submit">
              <p>Criar</p>
              <PlusCircle size={20} />
            </button>
          </div>
        </form>

        <section>
          <Tasks />
        </section>
      </div>
    </> 
  );
}

export default App;
