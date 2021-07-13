import Link from "next/link";
import cls from "./button.module.css";

export const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={cls.btn}>{props.children}</a>
      </Link>
    );
  } else {
    return (
      <button className={cls.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
};
