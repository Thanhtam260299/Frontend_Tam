import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Button from "~/components/Button";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, menuMore, menuShare }) {
  const classes = cx("menu-item", {
    separate: data.separate,
    menuMore,
    menuShare,
  });
  return (
    <Button
      className={classes}
      text
      leftIcon={data.icon}
      href={data.href}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
