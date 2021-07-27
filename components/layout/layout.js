import { useContext } from "react";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";
import { MainHeader } from "./main-header";

export const Layout = (props) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        ></Notification>
      )}
    </>
  );
};
