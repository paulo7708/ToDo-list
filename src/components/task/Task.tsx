import style from "./Task.module.css";
import { Circle, Trash } from "@phosphor-icons/react";

export const Task = () => {
  return (
    <div className={style.taskStyle}>
      <a href="#">
        <Circle size={25} />
      </a>
      <p className={style.text}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <a href="#">
        <Trash className={style.trash} size={20} />
      </a>
    </div>
  );
};
