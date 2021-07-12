import Link from "next/link";
import cls from "./button.module.css";

export const Button = (props) => {
  return (
    <Link href={props.link}>
      <a className={cls.btn}>{props.children}</a>
    </Link>
  );
};
