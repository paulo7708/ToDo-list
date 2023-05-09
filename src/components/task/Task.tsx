import style from "./Task.module.css";
import { Circle, Trash } from "@phosphor-icons/react";

interface bodyTask{
  key:number,
  content: string
}
export const Task = (props: bodyTask) => {
  return (
    <div className={style.taskStyle}>
      <a href="#">
        <Circle size={25} />
      </a>
      <p className={style.text}>
        {props.content}
      </p>
      <a href="#">
        <Trash className={style.trash} size={20} />
      </a>
    </div>
  );
};
