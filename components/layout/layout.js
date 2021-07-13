import { MainHeader } from "./main-header";

export const Layout = (props) => {
  return (
    <>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
    </>
  );
};
