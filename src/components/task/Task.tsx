import style from "./Task.module.css";
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import { useState } from "react";

interface bodyTask {
  key: number;
  content: string;
  status: boolean;
  onDeleteTasks: Function
}

export const Task = (props: bodyTask) => {
  const [divCount, setDivCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function handleDeleteTasks(){
    props.onDeleteTasks(props.content)
  }

  const handleClick = () => {
    if (isActive === false) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    setDivCount((state) => {
      return state + 1;
    });
    console.log(divCount);
  };

  

  return (
    <div
      className={isActive === true ? style.taskStyleCliked : style.taskStyle}
    >
      <a onClick={handleClick}>
        <Circle className={style.circle} size={25} />
        <CheckCircle className={style.checkCircle} size={25} />
      </a>
      <p className={style.text}>{props.content}</p>
      <a className={style.trash} onClick={handleDeleteTasks}>
        <Trash className={style.trash} size={20} />
      </a>
    </div>
  );
};
