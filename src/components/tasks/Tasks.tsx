import style from "./Tasks.module.css";
import clipboard from "../../assets/Clipboard.svg";
import { Task } from "../Task.tsx/Task";

export const Tasks = () => {
  return (
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
      <Task />
      <Task />
      <Task />
    </div>
  );
};
