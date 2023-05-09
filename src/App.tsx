import { MouseEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/header/Header";
import style from "./App.module.css";
import clipboard from "./assets/Clipboard.svg";
import { Task } from "./components/task/Task";

function App() {
  const [tasks, setTasks] = useState(["Hello"]);

  function onCreateTask(event: MouseEvent) {
    event?.preventDefault();
    console.log("clicado");
    setTasks([...tasks, "Hello"]);
    console.log(tasks);
  }
  return (
    <>
      <div>
        <Header />
        <form action="" className={style.form}>
          <div className={style.sectionForm}>
            <textarea name="" placeholder="Adicione uma nova tarefa" />
            <button onClick={onCreateTask} type="submit">
              <p>Criar</p>
              <PlusCircle size={20} />
            </button>
          </div>
        </form>

        <section>
          <div className={style.content}>
            <header className={style.contentHeader}>
              <div>
                <p className={style.p1}>
                  Tarefas criadas <span>0</span>
                </p>
                <p className={style.p2}>
                  Concluídas <span>0</span>
                </p>
              </div>
            </header>

            <div className={style.tasks}>
              <img src={clipboard} alt="" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
              <br />
            </div>
            <Task />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
