import Button from "~/components/Button/";
import styles from "./LogIn.module.scss";
import { useContext } from "react";

import { ActiveContext } from "~/components/FormLogIn/ActiveLogin";

function LogIn() {
  const activeContext = useContext(ActiveContext);
  const handleOpenForm = () => {
    activeContext.toggleActive();
  };
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.header}>
        Log in to follow creators, like videos, and view comments.
      </h4>
      <div className={styles.button}>
        <Button children="Log in" outLine logIn onClick={handleOpenForm} />
      </div>
    </div>
  );
}

export default LogIn;
