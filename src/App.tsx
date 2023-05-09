import { useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/header/Header";
import style from "./App.module.css";
import clipboard from "./assets/Clipboard.svg";
import { Task } from "./components/task/Task";

function App() {
  const [tasks, setTasks] = useState<any[]>([])
  const [newTasks, setNewTasks] = useState('');
  const [count, setCount] = useState(1)
  console.log(tasks)

  
  function handleNewTasks() {
    event?.preventDefault();
    const nextTask = {
      key: count,
      content: newTasks,
      status:false
    }

    setTasks([...tasks, nextTask ]);
    setNewTasks('')
    setCount(count +1)
    //console.log(count)
  }

  return (
    <>
      <div>
        <Header />
        <form onSubmit={handleNewTasks} className={style.form}>
          <div className={style.sectionForm}>
            <textarea
            name=""
            placeholder="Adicione uma nova tarefa"
            onChange={(event) => {
              setNewTasks(event.target.value)
            }}
            value={newTasks}
          />
            <button type="submit">
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
                  Tarefas criadas <span>{tasks.length}</span>
                </p>
                <p className={style.p2}>
                  Concluídas <span>{}0 de {tasks.length}</span>
                </p>
              </div>
            </header>

            <div className={style.tasks}>
              <img src={clipboard} alt="" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
              <br />
            </div>

            {tasks.map((task) => {
              return(
                <Task
                key={task.key}
                content={task.content}
                status={false}/>
              )
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
