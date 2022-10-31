//t thèn này là layout chung, chính của home, chung của 3 thèn home, following, profile,
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Header from "~/Layouts/component/Header";
import Sidebar from "~/Layouts/component/Sidebar";
import styles from "./DefaultLayout.module.scss";
import FormLogIn from "~/components/FormLogIn";

const cx = classNames.bind(styles);

function DefaultLayout({ children, large }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div
        className={cx("container", {
          large,
        })}
      >
        <Sidebar large={large} />
        <div className={cx("content")}>{children}</div>
      </div>
      <FormLogIn />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
